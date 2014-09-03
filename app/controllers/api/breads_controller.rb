class Api::BreadsController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :create

  def create
    bread = current_user.breads.create(bread_params)
    render json: bread, root: false
  end

  def show
    bread = Bread.find(params[:id])
    comments = bread.comments.as_json.map!{|c| c.merge(username: User.find(c["user_id"]).name)}
    owner = User.find(bread.user_id)
    bread_owner = bread.as_json.merge(username: owner.name, rips: bread.rip_count, dips: bread.dip_count, comments: comments)
    render json: bread_owner, root: false
  end

  def recent_bread
    breads = Bread.find(:all, :order => "created_at desc", :limit => 30)
    render json: breads, root: false
  end

  def yummy_bread
    breads = Bread.find(:all)
    render json: breads, root: false
  end

  def hot_bread
    breads = Bread.find(:all, :order => "created_at desc")
    render json: breads, root: false
  end

  def next_bread
    # store previous bread, cached
    # @previous_bread = Bread.find()
    breads = Bread.all.map(&:id)
    count = breads.count
    next_bread = Bread.find(breads[rand(count)-1])
    render json: next_bread, root: false
  end

  private

  def bread_params
    params.permit(:name, :description, :photo)
  end
end