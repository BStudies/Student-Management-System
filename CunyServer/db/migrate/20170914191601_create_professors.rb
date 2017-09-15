class CreateProfessors < ActiveRecord::Migration[5.1]
  def change
    create_table :professors do |t|
      t.belongs_to :person
      t.timestamps
    end
  end
end
