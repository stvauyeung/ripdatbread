class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo
  has_many :breads
end