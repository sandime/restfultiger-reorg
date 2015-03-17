/**
 * Created by SHERRI on 3/15/15.
 */
/**
 * Created by SHERRI on 3/14/15.
 */
//adding files  to angular app
angular.module('userApp', ['ngAnimate', 'app.routes', 'authService', 'mainCtrl', 'userCtrl', 'userService'])

// application configuration to integrate token into requests
.config(function($httpProvider) {

	// attach our auth interceptor to the http requests
	$httpProvider.interceptors.push('AuthInterceptor');

});
