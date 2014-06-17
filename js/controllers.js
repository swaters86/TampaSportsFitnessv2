// All controllers 

var organizationsControllers = angular.module('organizationsControllers', []);

var loginRegistrationControllers = angular.module('loginRegistrationControllers', []);

organizationsControllers.controller('WelcomeCtrl', ['$scope', function($scope) {
    $scope.greeting = 'holy shit this worked!';
}]);


organizationsControllers.controller('OrganizationsOverviewCtrl', ['$scope', '$http',
  function OrganizationsOverviewCtrl($scope, $http) {

    $http.get('models/categories.json').success(function(data) {
      $scope.categories = data;
    });

     $http.get('models/organizations.json').success(function(data) {
      $scope.organizations = data;
    });
  }
]);

/*
mainContentControllers.controller('OrganizationDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.organizationId = $routeParams.organizationId;
}]);
*/

organizationsControllers.controller('OrganizationsDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('models/' + $routeParams.organizationId + '.json').success(function(data) {
      $scope.organization = data;
    });
   }
]);

organizationsControllers.controller('OrganizationsCreateCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $scope.PageTitle = 'Submit a Club, Team, Group, etc.';
    $scope.SubmitButtonText = 'Create';
  }
]);

organizationsControllers.controller('OrganizationsEditCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $scope.PageTitle = 'Update your Organization';
    $scope.SubmitButtonText = 'Update';
  }
]);


loginRegistrationControllers.controller('loginCtrl', ['$scrope', function($scope) {


}]);



loginRegistrationControllers.controller('registrationCtrl', ['$scrope', function($scope) {


}]);