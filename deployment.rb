$:.unshift File.expand_path('../lib', __FILE__)
$:.unshift File.expand_path('../shared/middleware', __FILE__)
require 'csv'
require 'yaml'
require 'cdo/erb'
require 'cdo/slog'
require 'os'

def load_yaml_file(path)
  return nil unless File.file?(path)
  YAML.load(IO.read(path))
end

def load_languages(path)
  [].tap do |results|
    CSV.foreach(path, headers:true) do |row|
      results << row['code_s!']
    end
  end
end

def load_configuration()
  root_dir = File.expand_path('..', __FILE__)
  root_dir = '/home/ubuntu/website-ci' if root_dir == '/home/ubuntu/Dropbox (Code.org)'

  hostname = `hostname`.strip

  global_config = load_yaml_file(File.join(root_dir, 'globals.yml')) || {}
  local_config = load_yaml_file(File.join(root_dir, 'locals.yml')) || {}

  env = local_config['env'] || global_config['env'] || ENV['RACK_ENV'] || ENV['RAILS_ENV'] || 'development'

  rack_env = env.to_sym

  {
    'app_servers'                 => {},
    'build_apps'                  => false,
    'build_blockly_core'          => false,
    'build_dashboard'             => true,
    'build_pegasus'               => true,
    'build_shared_js'             => [:development, :staging].include?(rack_env),
    'dashboard_db_name'           => "dashboard_#{rack_env}",
    'dashboard_devise_pepper'     => 'not a pepper!',
    'dashboard_secret_key_base'   => 'not a secret',
    'dashboard_honeybadger_api_key' =>'00000000',
    'dashboard_port'              => 3000,
    'dashboard_unicorn_name'      => 'dashboard',
    'dashboard_enable_pegasus'    => rack_env == :development,
    'dashboard_workers'           => 8,
    'db_reader'                   => 'mysql://root@localhost/',
    'db_writer'                   => 'mysql://root@localhost/',
    'hip_chat_log_room'           => rack_env.to_s,
    'hip_chat_logging'            => false,
    'home_dir'                    => File.expand_path('~'),
    'languages'                   => load_languages(File.join(root_dir, 'pegasus', 'data', 'cdo-languages.csv')),
    'localize_apps'               => false,
    'name'                        => hostname,
    'npm_use_sudo'                => ((rack_env != :development) && OS.linux?),
    'pdf_port_collate'            => 8081,
    'pdf_port_markdown'           => 8081,
    'pegasus_db_name'             => rack_env == :production ? 'pegasus' : "pegasus_#{rack_env}",
    'pegasus_honeybadger_api_key' =>'00000000',
    'pegasus_port'                => 3000,
    'pegasus_unicorn_name'        => 'pegasus',
    'pegasus_workers'             => 8,
    'poste_host'                  => 'localhost.code.org:3000',
    'poste_secret'                => 'not a real secret',
    'proxy'                       => false, # If true, generated URLs will not include explicit port numbers in development
    'rack_env'                    => rack_env,
    'rack_envs'                   => [:development, :production, :staging, :test, :levelbuilder],
    'read_only'                   => false,
    'ruby_installer'              => rack_env == :development ? 'rbenv' : 'system',
    'root_dir'                    => root_dir,
    'use_dynamo_tables'           => [:staging, :test, :production].include?(rack_env),
    'use_dynamo_properties'       => [:staging, :test, :production].include?(rack_env),
    'dynamo_tables_table'         => "#{rack_env}_tables",
    'dynamo_tables_index'         => "channel_id-table_name-index",
    'use_dynamo_properties'       => false,
    'dynamo_properties_table'     => "#{rack_env}_properties",
    'lint'                        => rack_env == :staging || rack_env == :development,
    'assets_s3_bucket'             => "cdo-v3-assets",
    'assets_s3_directory'          => rack_env == :production ? 'assets' : "assets_#{rack_env}",
    'netsim_api_publickey'        => [:development].include?(rack_env) ? 'JGW2rHUp_UCMW_fQmRf6iQ==' : 'HQJ8GCCMGP7Yh8MrtDusIA==',

  }.tap do |config|
    raise "'#{rack_env}' is not known environment." unless config['rack_envs'].include?(rack_env)
    ENV['RACK_ENV'] = rack_env.to_s unless ENV['RACK_ENV']
    #raise "RACK_ENV ('#{ENV['RACK_ENV']}') does not match configuration ('#{rack_env}')" unless ENV['RACK_ENV'] == rack_env.to_s

    config['bundler_use_sudo'] = config['ruby_installer'] == 'system'

    config.merge! global_config
    config.merge! local_config

    config['channels_api_secret']     ||= config['poste_secret']
    config['daemon']              ||= [:development, :levelbuilder, :staging, :test].include?(rack_env) || config['name'] == 'production-daemon'
    config['dashboard_db_reader'] ||= config['db_reader'] + config['dashboard_db_name']
    config['dashboard_db_writer'] ||= config['db_writer'] + config['dashboard_db_name']
    config['pegasus_db_reader']   ||= config['db_reader'] + config['pegasus_db_name']
    config['pegasus_db_writer']   ||= config['db_writer'] + config['pegasus_db_name']
  end
end


####################################################################################################
##
## CDO - A singleton that contains our settings and integration helpers.
##
##########

class CDOImpl < OpenStruct

  @slog = nil

  def initialize()
    super load_configuration
  end

  def canonical_hostname(domain)
    return "#{self.name}.#{domain}" if ['console', 'hoc-levels'].include?(self.name)
    return domain if rack_env?(:production)

    # our HTTPS wildcard certificate only supports *.code.org
    # 'env', 'studio.code.org' over https must resolve to 'env-studio.code.org' for non-prod environments
    sep = (domain.include?('.code.org')) ? '-' : '.'
    return "localhost#{sep}#{domain}" if rack_env?(:development)
    return "translate#{sep}#{domain}" if self.name == 'crowdin'
    "#{rack_env}#{sep}#{domain}"
  end

  def site_url(domain, path = '', scheme = '')
    host = canonical_hostname(domain)
    if rack_env?(:development) && !CDO.https_development
      port = ['studio.code.org'].include?(domain) ? CDO.dashboard_port : CDO.pegasus_port
      host += ":#{port}"
    end

    path = '/' + path unless path.empty? || path[0] == '/'
    "#{scheme}//#{host}#{path}"
  end

  def studio_url(path = '', scheme = '')
    site_url('studio.code.org', path, scheme)
  end

  def code_org_url(path = '', scheme = '')
    site_url('code.org', path, scheme)
  end

  def dir(*dirs)
    File.join(root_dir, *dirs)
  end

  def hosts_by_env(env)
    hosts = []
    GlobalConfig['hosts'].each_pair do |key, i|
      hosts << i if i['env'] == env.to_s
    end
    hosts
  end

  def hostnames_by_env(env)
    hosts_by_env(env).map{|i| i['name']}
  end

  def rack_env?(env)
    rack_env == env
  end

  def slog(params)
    return unless slog_token
    @slog ||= Slog::Writer.new(secret:slog_token)
    @slog.write params
  end

  def shared_image_url(path)
    "/shared/images/#{path}"
  end

  # Default logger implementation
  attr_writer :log
  def log
    @log ||= Logger.new(STDOUT).tap do |l|
      l.level = Logger::INFO
      l.formatter = proc do |severity, _, _, msg|
        "#{severity != 'INFO' ? "#{severity}: " : ''}#{msg}\n"
      end
    end
  end

  # Simple backtrace filter
  FILTER_GEMS = %w(rake)

  def backtrace(exception)
    filter_backtrace exception.backtrace
  end

  def filter_backtrace(backtrace)
    FILTER_GEMS.map do |gem|
      backtrace.reject!{|b| b =~ /gems\/#{gem}/}
    end
    backtrace.each do |b|
      b.gsub!(CDO.dir, '[CDO]')
      Gem.path.each do |gem|
        b.gsub!(gem, '[GEM]')
      end
    end
    backtrace.join("\n")
  end

end

CDO ||= CDOImpl.new


####################################################################################################
##
## Helpers
##
##########

def rack_env()
  CDO.rack_env
end

def rack_env?(env)
  rack_env == env
end

def deploy_dir(*dirs)
  CDO.dir(*dirs)
end

def aws_dir(*dirs)
  deploy_dir('aws', *dirs)
end

def apps_dir(*dirs)
  deploy_dir('apps', *dirs)
end

def blockly_core_dir(*dirs)
  deploy_dir('blockly-core', *dirs)
end

def dashboard_dir(*dirs)
  deploy_dir('dashboard', *dirs)
end

def home_dir(*paths)
  File.join(CDO.home_dir, *paths)
end

def pegasus_dir(*paths)
  deploy_dir('pegasus', *paths)
end

def shared_dir(*dirs)
  deploy_dir('shared', *dirs)
end

def shared_js_dir(*dirs)
  deploy_dir('shared/js', *dirs)
end
