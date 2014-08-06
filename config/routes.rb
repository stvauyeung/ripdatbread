Bread::Application.routes.draw do
  namespace :api do
    
  end
  
  get 'ui(/:action)', controller: 'ui'
  root to: 'static_pages#home'
  get 'users/new', to: 'users#new'
end
