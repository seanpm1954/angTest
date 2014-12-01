app.controller('MenuController', ['$scope', 'ModalService','AuthService', '$state', '$rootScope', function($scope, ModalService, AuthService, $state, $rootScope) {
    //$scope.errorMsg = "Incorrect username/password combination";
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

            });
        }).catch(function(error) {
            // error contains a detailed error message.
            console.log(error);
        });

    };

    $scope.logoff = function(){
        AuthService.removeToken();
        $rootScope.user.role="";
        $state.go('/');

    }


}]);