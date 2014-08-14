class Comment < ActiveRecord::Base
  validates_presence_of :text
  belongs_to :bread
  belongs_to :user

  default_scope order('created_at DESC')

end