Bread::Application.routes.draw do
  namespace :api do
    
  end
  
  root to: 'static_pages#home'
end
