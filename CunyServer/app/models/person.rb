class Person < ApplicationRecord
    belongs_to :user
    has_one :student
    has_one :professor
    has_one :admin
end
