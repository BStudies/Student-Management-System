class Scholarship < ApplicationRecord
    belongs_to :payment_type
    belongs_to :scholarship_account
end
