kiosk.factory('Auth', ['$http', '$rootScope', function($http, $rootScope) {
    var user = {
        loggedIn: false,
        username: '',
        token: ''
    }

    function login(userData) {
        userData = {
            loggedIn: true,
            username: userData.username,
            token: ''
        };
        updateUserData(userData);
    }

    function getUserData() {
        return user;
    }

    function updateUserData(userData) {
        user = userData;
        $rootScope.$emit('userDataUpdated');
    }

    function subscribe(callback) {
        $rootScope.$on('userDataUpdated', callback);
    }

    return {
        login: login,
        updateUserData: updateUserData,
        getUserData: getUserData,
        subscribe: subscribe
    }
}]);
