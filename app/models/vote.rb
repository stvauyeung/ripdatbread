class Vote < ActiveRecord::Base
  belongs_to :user
  belongs_to :bread, counter_cache: true
  validates_uniqueness_of :value, scope: [:bread_id, :user_id]
end