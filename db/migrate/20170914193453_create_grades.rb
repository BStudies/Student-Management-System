class CreateGrades < ActiveRecord::Migration[5.1]
  def change
    create_table :grades do |t|
      t.integer :value
      t.timestamps
    end
  end
end
