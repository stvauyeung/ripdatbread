class BreadSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :photo, :user_id
end