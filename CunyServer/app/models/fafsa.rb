class Fafsa < ApplicationRecord
    belongs_to :payment_type
    belongs_to :fafsa_account
end
