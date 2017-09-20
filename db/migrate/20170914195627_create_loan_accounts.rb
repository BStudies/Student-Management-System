class CreateLoanAccounts < ActiveRecord::Migration[5.1]
  def change
    create_table :loan_accounts do |t|
      t.belongs_to :financial_account
      t.timestamps
    end
  end
end
