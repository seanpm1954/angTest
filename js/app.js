var app = angular.module('app', [
    'AuthService',
    'UserService',
    'angularModalService',
    'ngResource',
    'ui.router',
    'ui.bootstrap'
]);

app.config(function($stateProvider, AuthServiceProvider){
    //$urlRouterProvider.otherwise('/');

    $stateProvider
        .state('after',{
            url: '/after',
            templateUrl: 'partials/after.html',
            data:{
                isLoggedOn: AuthServiceProvider.getToken
            }
        })
        .state('error',{
            url: '/error',
            templateUrl: 'partials/error.html'
        })
        .state('blank',{
            url: '/blank',
            templateUrl: 'partials/blank.html'
        })

})
    .run(function($rootScope, AuthService, $state){
        $rootScope.$on('$stateChangeStart',function(event,next){
            var isAuth = next.data.isLoggedOn;
            if(AuthService.getToken() != 1){
                $rootScope.erMsg = "You must logon to view this page";
                event.preventDefault();
                $state.go('blank')
            }else{

            }
        })
    });

