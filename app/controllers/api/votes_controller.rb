class Api::VotesController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :create
  
  def create
    vote = @current_user.votes.new(vote_params)
    if vote.save
      flash[:success] = "vote created"
    else
      flash[:error] = "vote not created"
    end
    render json: vote, root: false
  end

  private

  def vote_params
    params.permit(:bread_id, :value)
  end
end