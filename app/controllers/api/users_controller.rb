class Api::UsersController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :create
  
  def signed_in_user
    @user = User.find_by_auth_token(params[:auth_token])
    render json: @user, root: false
  end

  def create
    user = User.create(user_params)
    render json: user, root: false
  end

  def show
    @user = User.find(params[:id])
    render json: @user, root: false
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation, :photo)
  end
end