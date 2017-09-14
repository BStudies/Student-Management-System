class Student < ApplicationRecord
    belongs_to :person
    has_and_belongs_to_many :courses
    has_and_belongs_to_many :grades
    has_many :payment_types
end
