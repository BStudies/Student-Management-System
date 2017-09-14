class AdminsController < UsersController
    # POST /admins
  def create
    super
    @admin = Admin.new()
    @admin.user_id = @user.id
    @admin.save
    # if @user.save
    #   # render json: @user, status: :created, location: @user
    #   render json: {token: user.auth_token}
    # else
    #   render json: @user.errors, status: :unprocessable_entity
    # end
  end
end
