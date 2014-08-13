class BreadSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :photo, :user_id
  has_many :comments
end