class Api::CommentsController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :create

  def create
    current_user.comments.create(params.permit(:text, :bread_id))
    render nothing: true  
  end
end