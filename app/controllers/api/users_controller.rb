class Api::UsersController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :create
  
  def create
    user = User.create(user_params)
    render nothing: true
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation, :photo)
  end
end