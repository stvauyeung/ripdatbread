class Api::BreadsController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :create

  def create
    bread = current_user.breads.create(bread_params)
    render nothing: true
  end

  def show
    bread = Bread.find(params[:id])
    owner = User.find(bread.user_id)
    bread_owner = bread.as_json.merge(username: owner.name)
    render json: bread_owner, root: false
  end

  private

  def bread_params
    params.permit(:name, :description, :photo)
  end
end