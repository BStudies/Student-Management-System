class PeopleController < UsersController
    def create
        super
        @person = Person.new(people_params)
        @person.user = @user
        @person.save
        # if @person.save
        # # render json: @user, status: :created, location: @user
        # render json: {token: user.auth_token}
        # else
        # render json: @user.errors, status: :unprocessable_entity
        # end
    end




    private
    def people_params
      # params.fetch(:user, {})
      params.require(:person).permit(:date_of_birth, :first_name, :last_name, :emergency_contact)
    end
end
