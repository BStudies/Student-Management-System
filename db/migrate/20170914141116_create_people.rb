class CreatePeople < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |t|
      t.belongs_to :user
      t.string :date_of_birth, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :emergency_contact, null: false
      t.timestamps
    end
  end
end
