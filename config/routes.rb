Bread::Application.routes.draw do
  namespace :api do
    
  end
  
  get 'ui(/:action)', controller: 'ui'
  root to: 'static_pages#home'
end
