app.controller('LogonController', ['$scope','$rootScope', '$state', 'title', 'close','UserService','AuthService', function($scope, $rootScope, $state, title, close, UserService, AuthService) {

  $scope.username = null;
  $scope.password = null;
  $scope.title = title;
    var vm = this;
    $scope.user = $rootScope.user;
  
  $scope.close = function() {

 	  close({
      username: $scope.username,
      password: $scope.password
    }, 500); // close, but give 500ms for bootstrap to animate
      UserService.login($scope.username, $scope.password).then( function success(response){
          vm.user = response.data;
          $rootScope.user = vm.user;

          if(AuthService.getToken()){
             // $location.path('/users');
              var role = AuthService.getToken();
              if(role == 1){
                  $rootScope.user.role = 'Admin';
              }else{
                  $rootScope.user.role = 'User';
              }
              $scope.user=vm.user;
              //user authenticated
              $state.go('after');
          }else{
              //user not found
              //incorrect username / password combo..
              $state.go('error');
          }



      }, handleError);
 };

    function handleError(response){
        alert('Error: ' + response.data);
    }

    $scope.logout = function(){
        AuthService.removeToken();
        //$location.path('/')

    }
}]);