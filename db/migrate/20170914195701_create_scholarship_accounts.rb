class CreateScholarshipAccounts < ActiveRecord::Migration[5.1]
  def change
    create_table :scholarship_accounts do |t|
      t.timestamps
    end
  end
end
