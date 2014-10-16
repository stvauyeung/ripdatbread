class BreadUploader < CarrierWave::Uploader::Base
  include CarrierWave::RMagick

  process resize_to_fit: [600, 400]

  def store_dir
    'public/breads'
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end
end