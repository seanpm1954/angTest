angular.module('AuthService',[])
    .factory('AuthService', function AuthService($window) {
        var store = $window.localStorage;
        var key = 'auth-token';

        return {
            getToken: getToken,
            setToken: setToken,
            removeToken: removeToken
        };

        function getToken(){
            return store.getItem(key);
        }

        function setToken(token){
            if(token){
                store.setItem(key, token)
            }else {
                store.removeItem(key);
            }
        }

        function removeToken(){
            store.removeItem(key);
        }
    });