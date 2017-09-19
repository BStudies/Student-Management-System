class FafsaAccountsController < UsersController
    def create         
        @fafsa_account = FafsaAccount.new(user_params)
        if @fafsa_account.save!
            render json: {token: @user.auth_token, accountType: :students}
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end
end
