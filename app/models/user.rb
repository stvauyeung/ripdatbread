class User < ActiveRecord::Base
  has_secure_password
  before_create :generate_token
  validates :password, :presence => true, :on => :create
  validates :name, :presence => true, :uniqueness => { case_sensitive: false }, format: { with: /\A[A-Za-z0-9_]+\z/, message: "only letters, numbers or underscores"}, length: { maximum: 25 }
  validates :email, :presence => true, :uniqueness => true
  has_many :breads
  has_many :votes
  has_many :comments
  mount_uploader :photo, ProfileUploader

  private

  def generate_token
    self.auth_token = SecureRandom.urlsafe_base64(10)
  end
end