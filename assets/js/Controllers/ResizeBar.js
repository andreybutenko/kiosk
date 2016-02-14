kiosk.controller('ResizeBar', ['$scope', '$http', '$window', function($scope, $http, $window){
    function recalculateSize() {
        var windowHeight = $window.innerHeight;
        var tabCount = document.querySelectorAll('.tab').length;
        var reservedSpace = 188;

        var leftoverSpace = (windowHeight - reservedSpace) % tabCount;
        var padding = 20 + leftoverSpace + 'px';
        document.querySelector('.today').setAttribute('style', 'padding-bottom: ' + padding);
    }

    setTimeout(recalculateSize, 1);
}]);
