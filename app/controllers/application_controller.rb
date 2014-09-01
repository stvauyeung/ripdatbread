class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by_auth_token(cookies[:user]) if cookies[:user] != ''
  end

  def logged_in?
    !!current_user
  end

  def require_login
    unless logged_in?
      flash[:danger] = "you need to sign in for that!"
      redirect_to login_path
    end
  end

  def require_logout
    if logged_in?
      flash[:error] = "where are you going, dave?"
      redirect_to user_path(current_user)
    end
  end
end
