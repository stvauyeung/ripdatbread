Ripdatbread::Application.routes.draw do
  namespace :api, defaults: {format: :json} do
    post '/users', to: 'users#create'
    post '/login', to: 'sessions#create'
    get '/logout', to: 'sessions#destroy'
    post '/breads/create', to: 'breads#create'
    get '/current_user/:auth_token', to: 'users#signed_in_user'
    post '/votes', to: 'votes#create'
    post '/comments', to: 'comments#create'
    get '/users/:id', to: 'users#show'
    get '/breads/:id', to: 'breads#show'
    get '/recent_bread', to: 'breads#recent_bread'
    get '/next_bread', to: 'breads#next_bread'
    get '/yummy', to: 'breads#yummy_bread'
  end
  
  get 'ui(/:action)', controller: 'ui'
  root to: 'static_pages#home', as: 'home'
  get 'login', to: 'sessions#new', as: 'login'
  get 'users/new', to: 'users#new'
  get 'users/:id', to: 'users#show', as: 'user'
  get 'breads/new', to: 'breads#new'
  get 'breads/:id', to: 'breads#show'
  get 'yummy', to: 'breads#yummy'
end
