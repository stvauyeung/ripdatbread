class Api::UsersController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :create
  
  def current_user
    @user = User.find_by_token(params[:token])
    render json: @user
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