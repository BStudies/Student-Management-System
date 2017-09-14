class Course < ApplicationRecord
    has_and_belongs_to_many :grades
    has_and_belongs_to_many :students
    belongs_to :professor
end
