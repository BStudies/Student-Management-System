class AddStudentsCoursesJoinTable < ActiveRecord::Migration[5.1]
  def change
    create_join_table :students, :courses do |t|
      t.index [:student_id, :course_id]
    end
  end
end
