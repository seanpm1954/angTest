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
        .state('/',{
            url: '/',
            templateUrl: 'partials/blank.html'
        })

})
    .run(function($rootScope, AuthService){
        $rootScope.$on('$stateChangeStart',function(event,next){
            var isAuth = next.data.isLoggedOn;
            if(AuthService.getToken() != 1){

                event.preventDefault();
            }else{

            }
        })
    });

