kiosk.controller('ScheduleCtrl', ['$scope', '$interval', '$window', 'ServerData', function($scope, $interval, $window, ServerData) {
    var viewData = ServerData.get('scheduleView');
    var schedules = viewData.data.schedules;

    ServerData.subscribe(function update() {
        viewData = ServerData.get('scheduleView');
        schedules = viewData.data.schedules;
        init();
    });

    $scope.schedules = {};
    $scope.today = 0;
    $scope.selected = 0;

    var debugDay = null; // ex: 'Tuesday'
    var debugScore = null; // ex: 8 * 60

    function init() {
        $scope.schedules = schedules;
        update();

        for(var i = 0; i < schedules.length; i++) {
            for(var j = 0; j < schedules[i].schedule.length; j++) {
                schedules[i].schedule[j].selected = false;
            }
        }

        update();
    }

    function update() {
        for(var i = 0; i < schedules.length; i++) {
            var searchDay = debugDay || moment().format('dddd');
            if(schedules[i].title == searchDay) {
                $scope.today = i;
                $scope.selected = i;
                break;
            }
        }

        function getTimeScore(time) {
            var timeSplit = time.split(' ');
            var subSplit = timeSplit[0].split(':');

            var hour = parseInt(subSplit[0]);
            var minute = parseInt(subSplit[1]);

            // convert to 24 hour time if past 12:59
            if((timeSplit[1] == 'pm') && (subSplit[0] != 12)) {
                hour += 12;
            }
            // if 12 am, make it 0-based
            if((timeSplit[1] == 'am') && (subSplit[0] == 12)) {
                hour = 0;
            }

            return (hour * 60) + minute;
        }

        var currScore = debugScore || getTimeScore(moment().format('h:mm a'));

        for(var i = 0; i < schedules.length; i++) {
            for(var j = 0; j < schedules[i].schedule.length; j++) {
                var startScore = getTimeScore(schedules[i].schedule[j].start);
                var endScore = getTimeScore(schedules[i].schedule[j].end);

                if((startScore <= currScore) && (endScore >= currScore)) {
                    schedules[i].schedule[j].selected = true;
                }
                else {
                    schedules[i].schedule[j].selected = false;
                }
            }
        }
    }

    $scope.calculateSpace = function calculateSpace() {
        return (($window.innerWidth - 300) / 2) - ((436 / 2) + ($scope.selected * 436));
    }

    $scope.calculateZ = function calculateZ(total, index, selected) {
        return total - Math.abs(selected - index) - 1;
    }

    $scope.switchTo = function switchTo(index) {
        $scope.selected = index;
    }

    init();
}]);
