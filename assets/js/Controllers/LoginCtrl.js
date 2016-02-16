kiosk.controller('LoginCtrl', ['$scope', 'Auth', 'ServerData', function($scope, Auth, ServerData) {
    $scope.loginDetails = {};

    $scope.login = function login() {
        Auth.login($scope.loginDetails);
    }
}]);
