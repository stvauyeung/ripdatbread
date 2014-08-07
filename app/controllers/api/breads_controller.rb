class Api::BreadsController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :create

  def create
    bread = Bread.new(bread_params)
    bread.user = current_user.id
    bread.save!
    render nothing: true
  end

  private

  def bread_params
    params.permit(:name, :description)
  end
end