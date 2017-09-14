class UsersController < ApiController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :require_login, except: [:create]
  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  # def show
  #   render json: @user
  # end
  def profile
    user = User.find_by_auth_token!(request.headers[:token])
    render json: {
      user: {
        username: user.username, 
        email: user.email, 
        name: user.name}
      }
  end
  

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      # render json: @user, status: :created, location: @user
      render json: {token: user.auth_token}
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      # params.fetch(:user, {})
      params.require(:user).permit(:username, :email, :password, :name)
    end
end
