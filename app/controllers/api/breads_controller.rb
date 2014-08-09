class Api::BreadsController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :create

  def create
    bread = current_user.breads.create(bread_params)
    render nothing: true
  end

  private

  def bread_params
    params.permit(:name, :description, :photo)
  end
end