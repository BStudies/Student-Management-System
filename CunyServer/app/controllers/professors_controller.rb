class ProfessorsController < PeopleController
    # POST /professors
    def create
        super
        @professor = Professor.new()
        @professor.person = @person
        if @professor.save
        # render json: @user, status: :created, location: @user
            render json: {token: @user.auth_token, accountType: :professors}
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end
end
