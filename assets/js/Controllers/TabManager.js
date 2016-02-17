kiosk.controller('TabManager', ['$scope', '$http', '$interval', '$stateParams', 'ServerData', function($scope, $http, $interval, $stateParams, ServerData) {
    $scope.pages = ServerData.get();

    $scope.activeIndex = 0;

console.log($stateParams)
    $scope.showBack = $stateParams.showBack;

    $scope.now = {
        time: '10:55',
        date: 'November 27th'
    }

    function updateNow() {
        $scope.now.time = moment().format('h:mm');
        $scope.now.date = moment().format('MMMM D')
    }

    $interval(updateNow, 30000);

    updateNow();

    $scope.switchTo = function switchTo(index) {
        $scope.activeIndex = index;
    }
}]);
