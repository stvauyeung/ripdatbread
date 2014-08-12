class Bread < ActiveRecord::Base
  validates_presence_of :name
  validates_presence_of :description
  belongs_to :user
  mount_uploader :photo, BreadUploader
end