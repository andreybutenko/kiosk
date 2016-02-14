kiosk.controller('ScheduleCtrl', ['$scope', '$interval', 'ServerData', function($scope, $interval, ServerData) {
    var viewData = ServerData.get('scheduleView');
    var schedules = viewData.data.schedules;

    $scope.schedules = {};
    $scope.today = 0;

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
            if(schedules[i].title == moment().format('dddd')) {
                today = i;
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

        var currScore = getTimeScore(moment().format('h:mm a'));
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

    init();
}]);
