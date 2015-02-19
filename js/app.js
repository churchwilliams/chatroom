var app = angular.module('chatroom', []);

//what's going on here?
app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});
