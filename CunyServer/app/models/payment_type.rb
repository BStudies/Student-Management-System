class PaymentType < ApplicationRecord
    belongs_to :student
    has_one :fafsa
    has_one :tap
    has_one :loan
    has_one :scholarship
    has_one :out_of_pocket
end
