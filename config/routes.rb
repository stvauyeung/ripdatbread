Ripdatbread::Application.routes.draw do
  namespace :api, defaults: {format: :json} do
    post '/users', to: 'users#create'
    post '/login', to: 'sessions#create'
    post '/breads/create', to: 'breads#create'
    get '/users/:id', to: 'users#show'
    get '/breads/:id', to: 'breads#show'
  end
  
  get 'ui(/:action)', controller: 'ui'
  root to: 'static_pages#home', as: 'home'
  get 'login', to: 'sessions#new'
  get 'users/new', to: 'users#new'
  get 'users/:id', to: 'users#show'
  get 'breads/new', to: 'breads#new'
  get 'breads/:id', to: 'breads#show'
end
