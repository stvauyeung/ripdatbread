app = angular.module('sessionsService', []);

app.service('Session', function() {
  this.create = function(user_id, username, user_photo_url) {
    this.id = user_id;
    this.username = username;
    this.photo = user_photo_url;
  };
  this.destroy = function() {
    this.id = null;
    this.username = null;
    this.photo = null;
  };
  return this;
});