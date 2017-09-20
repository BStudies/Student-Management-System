class CreateAdmins < ActiveRecord::Migration[5.1]
  def change
    create_table :admins do |t|
      t.belongs_to :person
      t.timestamps
    end
  end
end
