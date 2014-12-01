angular.module('UserService',[])
    .factory('UserService', function UserService($http, AuthService){
        return {
            login:login
        };

        function login(username, password){
            return $http.post('api/users/' + username + '/' + password).then(function success(response){
                AuthService.setToken(response.data.authLevel);
                return response;
            });
        }

    });