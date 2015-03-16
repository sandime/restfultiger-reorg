/**
 * Created by SHERRI on 3/15/15.
 */
//route for home page
angular.module('app.routes', ['ngRoute'])
.config(function ($routeProvider, $locationProvider){
    $routeProvider
        .when ('/', {
        templateUrl: 'app/views/pages/home.html'
    })
        //route for login
        .when('/login', {
            templateUrl: 'app/views/pages/login.html',
            controller: 'mainController',
            //controllerAs accesses mainController's functions using login.doLogin()
            controllerAs: 'login'

        });
    //get rid of the hash in the url
    $locationProvider.html5Mode(true);

});