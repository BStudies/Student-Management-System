class Professor < ApplicationRecord
    has_many :courses
    has_many :students, through: :courses
    has_many :grades, through: :students
    
end
