kiosk.controller('AdminCtrl', ['$scope', 'Auth', 'ServerData', function($scope, Auth, ServerData) {
    $scope.user = Auth.getUserData();

    Auth.subscribe(function update() {
        $scope.user = Auth.getUserData();
    });
}]);
