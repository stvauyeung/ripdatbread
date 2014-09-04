class SessionsController < ApplicationController
  before_filter :require_logout, only: :new
  
  def new
    
  end
end