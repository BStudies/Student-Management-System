class Loan < ApplicationRecord
    belongs_to :payment_type
    belongs_to :loan_account
end
