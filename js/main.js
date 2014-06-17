/**
 * Wraps the
 * @param text {string} haystack to search through
 * @param search {string} needle to search for
 * @param [caseSensitive] {boolean} optional boolean to use case-sensitive searching
 */
angular.module('ui.highlight',[]).filter('highlight', function () {
  return function (text, search, caseSensitive) {
    if (search || angular.isNumber(search)) {
      text = text.toString();
      search = search.toString();
      if (caseSensitive) {
        return text.split(search).join('<span class="ui-match">' + search + '</span>');
      } else {
        return text.replace(new RegExp(search, 'gi'), '<span class="ui-match">$&</span>');
      }
    } else {
      return text;
    }
  };
});


var mysfApp = angular.module('mysfApp', ['ngRoute', 'organizationsControllers', 'loginRegistrationControllers', 'ui.highlight','ngSanitize']);


mysfApp.config(['$routeProvider',

function($routeProvider){

  $routeProvider.when(
    '/organizations',
    {
      templateUrl:'partials/content-overview.html', 
      controller:'OrganizationsOverviewCtrl'
    }).when(
    '/organizations/:organizationId',
    {
      templateUrl:'partials/content-detail.html', 
      controller:'OrganizationsDetailCtrl'
    }).when(
    '/organizations/:organizationId/create',
    {
      templateUrl:'partials/content-submit.php',
      controller: 'OrganizationsCreateCtrl'
    }).when( 
    '/organizations/:organizationId/edit',
    {
      templateUrl:'partials/content-submit.php',
      controller: 'OrganizationsEditCtrl'
    }).when(
    '/login',
    {
      templateUrl:'partials/login.html',
      controller:'LoginCtrl'
    }).when(
    '/register',
    {
      templateUrl:'partials/register.html',
      controller:'RegistrationCtrl'
    }).otherwise(
    {
       redirectTo:'/', 
       templateUrl:'partials/welcome.html', 
       controller:'WelcomeCtrl'
    });

}]);

// Starting service, at some point these should go into a seperate file. 
mysfApp.factory('getGlobalVarsService', function() {
	return {
		siteName : 'TampaSportsFitness',
		siteAnnouncements : 'How do you like our new site?'
	};
});

// For controlling content in between the HEAD tags
mysfApp.controller('headController', function headController($scope,getGlobalVarsService) {
	$scope.siteName = getGlobalVarsService.siteName;
});

//For controlling content in between the HEADER tags
mysfApp.controller('headerController', function headerController($scope, getGlobalVarsService) {
	$scope.siteName = getGlobalVarsService.siteName;
});





