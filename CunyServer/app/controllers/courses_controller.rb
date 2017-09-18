class CoursesController < ApiController
    before_action :require_professor, only: [:create]

    def create 
        course = Course.new(course_params)
        course.professor = current_user.person.professor
        if course.save
            render json: {message: "#{course.name} successfully added to Professor: #{current_user.person.first_name}"}
        end
    end

    def index
        courses = Course.all 
        professors = {}
        courses.each do |course|
            # course_copy = course
            # course[:professor_id] << course.professor.person.last_name
            professors[course[:professor_id]] = course.professor.person.last_name            
        end
        # professor_names = {}
        # professors.each do |professor|

        # end
        
        
        render json: {
            courses: courses,
            professors: professors,
        }
    end

    private
    def course_params
      params.require(:course).permit(:name, :description, :cost)
    end
    
end
