class Api::SessionsController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :create
  
  def create
    params.permit(:email, :password)
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      cookie_data = user.to_json(only: [:id, :name, :photo, :token])
      cookies.permanent[:user] = cookie_data
      render json: cookie_data
    else
      render nothing: true
    end
  end

  def destroy
    cookies.delete :user
    redirect_to home_path
  end
end