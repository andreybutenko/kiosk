kiosk.controller('CalendarCtrl', ['$scope', '$http', 'ServerData', function($scope, $http, ServerData) {
    var data = ServerData.get();
    var premonthBuffer = 0;
    $scope.imageUrl = '/assets/img/february2016%20-%20PopArt%20Studio.png';
    $scope.imageCredit = 'PopArt Studio'
    $scope.weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    $scope.calendarData = [];
    $scope.month = [];

    $scope.selected = {
        index: -1,
        date: 'Select a day to see more details',
        events: []
    }

    $scope.select = function select(dayIndex, weekIndex) {
        if($scope.selected.index != -1) {
            $scope.calendarData[$scope.selected.index].selected = false;
        }

        var index = (7 * weekIndex) + dayIndex;
        $scope.selected.index = index;
        $scope.selected.events = $scope.calendarData[index].during;
        $scope.selected.date = $scope.calendarData[index].moment;
        $scope.calendarData[index].selected = true;
    }

    // format months into an array of weeks, which are each an array of days
    function formatMonth() {
        $scope.month = [];
        var week = [];

        for(var i = 0; i < $scope.calendarData.length; i++) {
            if((i % 7 == 0) && (i > 0)) {
                $scope.month.push(week);
                week = [];
            }

            week.push($scope.calendarData[i]);
        }

        if(week.length != 0) {
            $scope.month.push(week);
        }
    }

    function debugDate(date) {
        return date.format('dddd, MMMM Do, YYYY');
    }

    // add each day to calendar. From start of the month's week, to end of the month's week. Some overlap into adjacent months
    function setupCalendar() {
        var workingDay = moment().startOf('month').startOf('week');
        var looping = true;
        var calendarData = [];

        while(looping) {
            if(workingDay.isAfter(moment().endOf('month').endOf('week'))) {
                looping = false;
                break;
            }

            var dayData = {
                moment: workingDay.format('dddd, MMMM Do, YYYY'),
                date: workingDay.date(),
                selected: false,
                faded: false,
                start: [],
                during: []
            };

            if(workingDay.isBefore(moment().startOf('month'))) {
                premonthBuffer++;
                dayData.faded = true;
            }
            if(workingDay.isAfter(moment().endOf('month'))) {
                dayData.faded = true;
            }

            calendarData.push(dayData);

            workingDay.add(1, 'days');
        }

        $scope.calendarData = calendarData;
    }

    // add events to calendar
    function populateCalendar() {
        var events = [];
        for(var i = 0; i < data.length; i++) {
            if(data[i].type == 'calendarView') {
                events = data[i].data.events;
                break;
            }
        }

        function formatDate(date) {
            var dateSplit = date.split('-');
            return moment([dateSplit[2], dateSplit[0] - 1, dateSplit[1]]);
        }

        for(var i = 0; i < events.length; i++) {
            events[i].start = formatDate(events[i].dateStart);
            events[i].end = formatDate(events[i].dateEnd);
            events[i].duration = events[i].end.diff(events[i].start, 'days') + 1;

            var startIndex = events[i].start.diff(moment().startOf('month').startOf('week'), 'days');

            $scope.calendarData[startIndex].start.push(events[i]);
            for(var j = startIndex; j < startIndex + events[i].duration; j++) {
                $scope.calendarData[j].during.push(events[i]);
            }
        }
    }

    setupCalendar();
    populateCalendar();
    formatMonth();
}]);
