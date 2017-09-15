class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.belongs_to :professor
      # t.has_and_belongs_to_many :students
      # t.has_and_belongs_to_many :grades
      t.string :name
      t.string :description
      t.timestamps
    end
  end
end
