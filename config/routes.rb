Bread::Application.routes.draw do
  namespace :api, defaults: {format: :json} do
    post '/users', to: 'users#create'
  end
  
  get 'ui(/:action)', controller: 'ui'
  root to: 'static_pages#home'
  get 'users/new', to: 'users#new'
end
