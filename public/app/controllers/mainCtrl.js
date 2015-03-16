/**
 * Created by SHERRI on 3/16/15.
 */
//mainController controls the layout of entire app
//checks if user is logged in
//gets user data to display hello sherri Auth.getUser() function
//which hits api endpoint localhost:8080/api/me


angular.module ('mainCtrl', [])
.controller('mainController', function($rootScope, $location, Auth){

        var vm = this;
        //get info if the person is logged in
        vm.loggedIn = Auth.isLoggedIn();

        //check if the user is logged in on every request
        $rootScope.$on('$routeChangeStart', function(){
            vm.loggedIn = Auth.isLoggedIn();

        //get user info on route change
            Auth.getUser()
                .success(function(data){
                    vm.user = data;

                });
        });
        //function to handle login form
        vm.doLogin = function() {

            //call the Auth.login() function
            Auth.login(vm.loginData.username, vm.loginData.password)
                .success(function(data){

                    //if log in successful, redirect to users page
                    $location.path('/users');
                });
        };

        //function for logging out
        vm.doLogout = function (){
            Auth.logout();
            //reset all user info-- use this on budget form
            vm.user = {};
            $location.path('/login');


        };
    });