class ProfileUploader < CarrierWave::Uploader::Base
  include CarrierWave::RMagick
  storage :file

  process resize_to_fit: [500, 500]

  version :normal do
    process resize_to_fill: [250, 250]
  end

  def store_dir
    'public/users'
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end
end