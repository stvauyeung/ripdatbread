class Api::VotesController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :create
  
  def create
    if current_user.votes.create(vote_params)
      flash[:success] = "vote created"
    else
      flash[:error] = "vote not created"
    end
    render nothing: true
  end

  private

  def vote_params
    params.permit(:bread_id, :value)
  end
end