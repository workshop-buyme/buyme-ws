app.run(['$rootScope', 'WebSocketService', function ($rootScope, WebSocketService) {
  $rootScope.$on('login', function (event) {
    WebSocketService.init($rootScope.user.username);
  });

  $rootScope.$on('logout', function (event) {
    WebSocketService.close();
  });
}]);
