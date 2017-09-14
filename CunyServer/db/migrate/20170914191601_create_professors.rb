class CreateProfessors < ActiveRecord::Migration[5.1]
  def change
    create_table :professors do |t|
      # t.has_many :courses
      # t.has_many :students, through: :courses
      t.timestamps
    end
  end
end
