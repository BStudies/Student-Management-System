class CreateTaps < ActiveRecord::Migration[5.1]
  def change
    create_table :taps do |t|
      t.belongs_to :payment_type
      t.integer :value
      t.timestamps
    end
  end
end
