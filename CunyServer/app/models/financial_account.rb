class FinancialAccount < ApplicationRecord
    belongs_to :user
    has_one :fafsa_account
    has_one :tap_account
    has_one :scholarship_account
    has_one :loan_account
end
