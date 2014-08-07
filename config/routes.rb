Bread::Application.routes.draw do
  namespace :api, defaults: {format: :json} do
    post '/users', to: 'users#create'
    post '/login', to: 'sessions#create'
  end
  
  get 'ui(/:action)', controller: 'ui'
  root to: 'static_pages#home', as: 'home'
  get 'users/new', to: 'users#new'
  get 'login', to: 'sessions#new'
end
