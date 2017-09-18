class CreateLoanAccounts < ActiveRecord::Migration[5.1]
  def change
    create_table :loan_accounts do |t|

      t.timestamps
    end
  end
end
