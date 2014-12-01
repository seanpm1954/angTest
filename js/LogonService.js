angular.module('LogonService',['ngRoute'])
    .controller('LogonCtrl', function LogonCtrl( UserService, AuthService, $location, $scope,$rootScope){
        var vm = this;

        vm.login = login;
        $scope.user = $rootScope.user;


        function login(username, password){
            console.log(username, password);
            UserService.login(username, password).then( function success(response){
                vm.user = response.data;
                $rootScope.user = vm.user;

                if(AuthService.getToken()){
                    $location.path('/users');
                    var role = AuthService.getToken();
                    if(role == 1){
                        $rootScope.user.role = 'Admin';
                    }else{
                        $rootScope.user.role = 'User';
                    }
                    $scope.user=vm.user;
                    $location.path('/users');
                }else{
                    $location.path('/');
                }



            }, handleError);
        }

        function handleError(response){
            alert('Error: ' + response.data);
        }

        $scope.logout = function(){
            AuthService.removeToken();
            $location.path('/')

        }
    });