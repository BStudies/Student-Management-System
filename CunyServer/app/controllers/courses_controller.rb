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
        render json: {courses: courses}
    end

    private
    def course_params
      params.require(:course).permit(:name, :description)
    end
    
end
