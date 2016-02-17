kiosk.factory('Auth', ['$http', '$rootScope', function($http, $rootScope) {
    var user = {
        error: false,
        loggedIn: false,
        username: '',
        pass: ''
    }

    function login(userData) {
        $http.post('/api/login', {
            "user": userData.user,
            "pass": userData.pass
        })
        .then(function success(response) {
            if(response.data.verified == true) {
                updateUserData({
                    error: false,
                    loggedIn: true,
                    user: userData.user,
                    pass: userData.pass
                });
            }
            else {
                updateUserData({
                    error: 'Username or password incorrect. Ensure that neither are typed incorrectly.',
                    loggedIn: false,
                    user: '',
                    pass: ''
                });
                console.log(response);
            }
        },
        function fail(data) {
            updateUserData({
                error: 'Connection to server failed. Try again later, or contact someone relevant.',
                loggedIn: false,
                user: '',
                pass: ''
            });
            console.log(data);
        });
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
