class User < ActiveRecord::Base
  has_secure_password
  before_create :generate_token
  validates :password, :presence => true, :on => :create
  validates :name, :presence => true, :uniqueness => { case_sensitive: false }, format: { with: /\A[A-Za-z0-9_]+\z/, message: "only letters, numbers or underscores"}, length: { maximum: 25 }
  validates :email, :presence => true, :uniqueness => true

  def generate_token
    self.token = SecureRandom.urlsafe_base64(10)
  end
end