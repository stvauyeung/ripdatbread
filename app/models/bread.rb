class Bread < ActiveRecord::Base
  validates_presence_of :name
  validates_presence_of :description
  belongs_to :user
  has_many :votes
  mount_uploader :photo, BreadUploader

  def rip_count
    self.votes.where(value: "rip").count
  end

  def dip_count
    self.votes.where(value: "dip").count
  end
end