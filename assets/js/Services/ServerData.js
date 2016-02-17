kiosk.factory('ServerData', ['$http', '$rootScope', 'Auth', function($http, $rootScope, Auth) {
    var data = [];

    $http.get('/api/get')
    .then(function success(response) {
        data = response.data.data;
        $rootScope.$emit('serverDataUpdated');
    },
    function fail(data) {
        alert('Connection to server failed. Try again later, or contact somebody relevant.');
        console.log(data);
    });

    function getData(typeName) {
        if(typeName) {
            var returnData;
            for(var i = 0; i < data.length; i++) {
                if(data[i].type == typeName) {
                    returnData = data[i];
                    break;
                }
            }
            return returnData;
        }
        else {
            return data;
        }
    }

    function upload(data) {
        var userData = Auth.getUserData();
        $http.post('/api/update', {
            "user": userData.user,
            "pass": userData.pass,
            "data": angular.toJson(data)
        })
        .then(function success(response) {
            if(response.data.saved == true) {
                alert('Saved successfully!');
            }
            else {
                alert('Error saving! Try again later, or contact someone relevant.');
                console.log(response);
            }
        },
        function fail(data) {
            alert('Connection to server failed. Try again later, or contact someone relevant.');
            console.log(data);
        });
    }

    function subscribe(callback) {
        $rootScope.$on('serverDataUpdated', callback);
    }

    return {
        get: getData,
        upload: upload,
        subscribe: subscribe
    }
}]);
