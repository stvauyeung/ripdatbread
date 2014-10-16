CarrierWave.configure do |config|
  if Rails.env.production?
    config.fog_credentials = {
      :provider               => 'AWS',                        # required
      :aws_access_key_id      => ENV['AWS_KEY'],                        # required
      :aws_secret_access_key  => ENV['AWS_SECRET'],                        # required
      :region                 => 'us-standard',                  # optional, defaults to 'us-east-1'
    }
    config.fog_directory  = 'ripdatbread'                          # required
  else
    config.storage = :file
    config.enable_processing = Rails.env.development?
  end
end