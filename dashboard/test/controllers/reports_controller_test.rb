require 'test_helper'

class ReportsControllerTest < ActionController::TestCase
  include Devise::TestHelpers

  setup do
    @admin = create(:admin)
    sign_in(@admin)

    @not_admin = create(:user, username: 'notadmin')

    @script = create(:script, name: 'Report Script')
    @stage = create(:stage, script: @script, name: 'Report Stage 1')
    @stage2 = create(:stage, script: @script, name: 'Report Stage 2')
    @script_level = create(:script_level, script: @script, stage: @stage)
    @script_level2 = create(:script_level, script: @script, stage: @stage2)
    @script_level.move_to_bottom
    @script_level2.move_to_bottom

    @teacher = create(:teacher)
    @teacher_section = create(:section, :user => @teacher)

    @student = create(:user)
    @follower = Follower.create(:section => @teacher_section, :user => @teacher, :student_user => @student)

    @other_student = create(:user)
  end

  test "should setup properly" do
    assert_equal @script_level.script, @script_level2.script
  end

  test "should get user_stats" do
    get :user_stats, :user_id => @not_admin.id
    assert_response :success
  end

  test "should not get user_stats if not signed in" do
    sign_out @admin
    get :user_stats, :user_id => @not_admin.id

    assert_redirected_to_sign_in
  end

  test "should get user_stats for yourself if not admin" do
    sign_in @not_admin

    get :user_stats, :user_id => @not_admin.id

    assert_response :success
  end

  test "should get user_stats for students if teacher" do
    sign_in @teacher

    get :user_stats, :user_id => @student.id

    assert_response :success
  end

  test "should not get user_stats for other users if not admin" do
    sign_in create(:user)

    get :user_stats, :user_id => @not_admin.id

    assert_response :forbidden
  end

  test "should have two game groups if two stages" do
    get :header_stats, script_id: @script_level.script.id, user_id: @not_admin.id
    css = css_select "div.game-group"
    assert_equal 2, css.count
  end

  test "should have one game group if one stage" do
    @script = create(:script, name: 'Single Stage Script')
    @stage = create(:stage, script: @script, name: 'Stage 1')
    @script_level = create(:script_level, script: @script, stage: @stage)

    get :user_stats, script_id: @script_level.script.id, user_id: @not_admin.id
    css = css_select "div.game-group"
    assert_equal 1, css.count
  end

  test 'should show lesson plan link if course[1,2,3], not if legacy curriculum' do
    sign_out(@not_admin)
    teacher = create(:teacher)
    sign_in(teacher)

    get :header_stats, script_id: Script::COURSE1_NAME, user_id: teacher.id
    assert_select '.stage-lesson-plan-link'

    get :header_stats, script_id: Script::COURSE2_NAME, user_id: teacher.id
    assert_select '.stage-lesson-plan-link'

    get :header_stats, script_id: Script::COURSE3_NAME, user_id: teacher.id
    assert_select '.stage-lesson-plan-link'

    get :header_stats, script_id: Script::COURSE4_NAME, user_id: teacher.id
    assert_select '.stage-lesson-plan-link'

    get :header_stats, script_id: Script::TWENTY_HOUR_NAME, user_id: teacher.id
    assert_select '.stage-lesson-plan-link', 0
  end

  test 'should show lesson plan link only if teacher' do
    sign_out(@not_admin)

    get :header_stats, script_id: Script::COURSE1_NAME
    assert_select '.stage-lesson-plan-link', 0

    teacher = create(:teacher)
    sign_in(teacher)

    get :header_stats, script_id: Script::COURSE1_NAME, user_id: teacher.id
    assert_select '.stage-lesson-plan-link'

    sign_out(teacher)
    student = create(:student)
    sign_in(student)

    get :header_stats, script_id: Script::COURSE1_NAME, user_id: student.id
    assert_select '.stage-lesson-plan-link', 0
  end

  test "should not show lesson plan link if student" do
    sign_out(@not_admin)
    student = create(:student)
    sign_in(student)

    get :header_stats, script_id: Script::COURSE1_NAME, user_id: student.id
    assert_select '.stage-lesson-plan-link', 0
  end

  test "should have valid lesson plan link if shown" do
    sign_out(@not_admin)
    teacher = create(:teacher)
    sign_in(teacher)

    course1 = Script.get_from_cache(Script::COURSE1_NAME)

    get :header_stats, script_id: course1.id, user_id: teacher.id

    unplugged_curriculum_path_start = "curriculum/#{course1.name}/"
    assert_select '.stage-lesson-plan-link a' do
      assert_select "[href=?]", /.*#{unplugged_curriculum_path_start}\d.*/
    end
  end

  test "should return 20h curriculum by default" do
    get :user_stats, user_id: @not_admin.id
    css = css_select "div.game-group"
    assert_equal 20, css.count
  end


  test "should get usage" do
    get :usage, :user_id => @not_admin.id
    assert_response :success
  end

  test "should not get usage if not signed in" do
    sign_out @admin
    get :usage, :user_id => @not_admin.id

    assert_redirected_to_sign_in
  end

  test "should get usage for yourself if not admin" do
    sign_in @not_admin

    get :usage, :user_id => @not_admin.id

    assert_response :success
  end


  test "should get usage for students if teacher" do
    sign_in @teacher

    get :usage, :user_id => @student.id

    assert_response :success
  end

  test "should not get usage for other users if not admin or teacher" do
    sign_in create(:user)

    get :usage, :user_id => @not_admin.id

    assert_response :forbidden
  end

  test "should get header_stats" do
    sign_out @admin

    get :header_stats
    assert_response :success
  end

  test "should get header_stats with user_id" do
    follower = create :follower

    sign_in follower.user

    get :header_stats, user_id: follower.student_user
    assert_response :success
  end

  test "should not get header_stats with unauthorized user_id" do
    sign_in @not_admin

    get :header_stats, user_id: @admin.id
    assert_response :forbidden
  end


  test "should not get header_stats with user_id when not signed in" do
    sign_out @admin

    get :header_stats, user_id: @admin.id
    assert_redirected_to_sign_in
  end

  test "should get header_stats with empty user_id" do
    get :header_stats, user_id: ''
    assert_response :success
  end

  test "should get header_stats if not signed in" do
    sign_out @admin
    get :header_stats
    assert_response :success
  end

  test "should get prizes" do
    get :prizes
    assert_response :success
  end

  test "should get prizes if not admin" do
    sign_in @not_admin
    get :prizes
    assert_response :success
  end

  test "should not get prizes if not signed in" do
    sign_out @admin
    get :prizes

    assert_redirected_to_sign_in
  end

  generate_admin_only_tests_for :all_usage

  generate_admin_only_tests_for :admin_stats

  test "should get level_stats" do
    get :level_stats, {:level_id => create(:level).id}
    assert_response :success
  end

  test "should not get level_stats if not admin" do
    sign_in @not_admin
    get :level_stats, {:level_id => create(:level).id}
    assert_response :forbidden
  end

  test "should not get level_stats if not signed in" do
    sign_out @admin
    get :level_stats, {:level_id => create(:level).id}

    assert_redirected_to_sign_in
  end

  generate_admin_only_tests_for :assume_identity_form

  test "should assume_identity" do
    post :assume_identity, {:user_id => @not_admin.id}
    assert_redirected_to '/'

    assert_equal @not_admin.id, session['warden.user.user.key'].first.first
  end

  test "should assume_identity by username" do
    post :assume_identity, {:user_id => @not_admin.username}
    assert_redirected_to '/'

    assert_equal @not_admin.id, session['warden.user.user.key'].first.first
  end

  test "should assume_identity by email" do
    post :assume_identity, {:user_id => @not_admin.email}
    assert_redirected_to '/'

    assert_equal @not_admin.id, session['warden.user.user.key'].first.first
  end


  test "should assume_identity by hashed email" do
    email = 'someone_under13@somewhere.xx'
    user = create :user, age: 12, email: email

    post :assume_identity, {:user_id => email}
    assert_redirected_to '/'

    assert_equal user.id, session['warden.user.user.key'].first.first
  end

  test "should assume_identity error if not found" do
    post :assume_identity, {:user_id => 'asdkhaskdj'}

    assert_response :success

    assert_select '.container .alert-danger', 'User not found'
  end

  test "should not assume_identity if not admin" do
    sign_in @not_admin
    post :assume_identity, {:user_id => @admin.id}
    assert_response :forbidden
    assert_equal @not_admin.id, session['warden.user.user.key'].first.first # no change
  end

  test "should not assume_identity if not signed in" do
    sign_out @admin
    post :assume_identity, {:user_id => @admin.id}

    assert_redirected_to_sign_in
  end

  test "should lookup_section" do
    post :lookup_section, {:section_code => @teacher_section.code}
    assert_select '#section_owner', 'Owner: ' + @teacher.email
  end

  test "should lookup_section error if not found" do
    post :lookup_section, {:section_code => 'ZZZZ'}
    assert_response :success
    assert_select '.container .alert-danger', 'Section code not found'
  end

  test "should not lookup_section if not admin" do
    sign_in @not_admin
    post :lookup_section, {:section_code => @teacher_section.code}
    assert_response :forbidden
  end

  test "should not lookup_section if not signed in" do
    sign_out @admin
    post :lookup_section, {:section_code => @teacher_section.code}
    assert_redirected_to_sign_in
  end

  # 'report-stage-1' instead of 'report-stage-1: Report Stage 1'
  test "should render single stage name for custom script" do
    # first script has 1 stage, second script has 2 stages
    create(:script_level, script: @script, stage: @stage2)
    get :header_stats, script_id: @script.id
    # render string from test translation data
    assert_select 'div.stage', 2
    assert_select 'div.stage', 'Stage 1: report-stage-1'
  end

  test 'should get admin progress' do
    get :admin_progress
    assert_select 'h1', 'Admin progress'
  end

end
