var kiosk = angular.module('kiosk', ['ui.router', 'ngSanitize']);

kiosk.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            views: {
                '': {
                    templateUrl: '/views/kiosk-container.html'
                },
                'genericView@main': {
                    templateUrl: '/views/generic-view.html'
                },
                'frontView@main': {
                    templateUrl: '/views/front-view.html'
                },
                'sportsView@main': {
                    templateUrl: '/views/sports-view.html'
                },
                'calendarView@main': {
                    templateUrl: '/views/calendar-view.html'
                },
                'scheduleView@main': {
                    templateUrl: '/views/schedule-view.html'
                }
            }
        });
});
