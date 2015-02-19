var app = angular.module('chatroom');


//how could I re-write this as a factory? 

app.service('httpRequestInterceptor', function () {
  
    this.request = function (config) {
      config.headers = {'X-Parse-Application-Id': '5oA4oab0RNwHkfRrXt5WlMqDnzUu6bcmpf4P2uKy', 'X-Parse-REST-API-Key': 'ZIKuhgCABMrP0kLnSMlEYWYlljNWtHnJzYaKwWc8'};
      return config;
  
  };
});
