class CreateStudents < ActiveRecord::Migration[5.1]
  def change
    create_table :students do |t|
      t.belongs_to :person
      # t.has_and_belongs_to_many :grades
      # t.has_and_belongs_to_many :courses
      # t.has_many :payment_types
      t.timestamps
    end
  end
end
