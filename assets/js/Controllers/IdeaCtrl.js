kiosk.controller('IdeaCtrl', ['$scope', '$sce', 'ServerData', function($scope, $sce, ServerData) {
    $scope.getIframeUrl = function getIframeUrl(url) {
        return $sce.trustAsResourceUrl(url);
    }
}]);
