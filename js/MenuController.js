app.controller('MenuController', ['$scope', 'ModalService','AuthService', '$state', '$rootScope', function($scope, ModalService, AuthService, $state, $rootScope) {

    $scope.logon = function() {

        ModalService.showModal({
            templateUrl: "partials/logon.html",
            controller: "LogonController",
            inputs: {
                title: "Logon"
            }
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                if(result.username === null){
                    $scope.errorMsg = "Incorrect username";
                }
               else if (result.password === null)
                {
                    $scope.errorMsg = "Incorrect password";
                }
                else
                {
                    $scope.errorMsg = "Incorrect username/password";
                }

            });
        }).catch(function(error) {
            // error contains a detailed error message.
        });

    };

    $scope.logoff = function(){
        AuthService.removeToken();
        $rootScope.user.role="";
        $state.go('/');

    }


}]);