class AdminsController < PeopleController
    # POST /admins
  def create
    super
    @admin = Admin.new()
    @admin.person_id = @person.id
    @admin.save
    if @user.save
      # render json: @user, status: :created, location: @user
      render json: {token: user.auth_token, accountType: :admins}
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end
end
