kiosk.controller('DashCtrl', ['$scope', '$sce', '$interpolate', 'Auth', 'ServerData', function($scope, $sce, $interpolate, Auth, ServerData) {
    $scope.pages = ServerData.get();
    $scope.properties = []

    for(var i = 0; i < $scope.pages.length; i++) {
        var pageHTML = '';

        pageHTML += generateProperty(i, $scope.pages[i], '', 'page');

        $scope.properties[i] = pageHTML;
    }

    function traceify(attr) {
        if(isNaN(attr)) {
            return '.' + attr;
        }
        else {
            return '[' + parseInt(attr) + ']';
        }
    }

    function getType(variable) {
        if(typeof variable == 'string') {
            return 'string';
        }
        if(typeof variable == 'object') {
            if(Array.isArray(variable)) {
                return 'array';
            }
            else {
                return 'object';
            }
        }
        return 'string';
    }

    function generateProperty(attr, value, trace, special) {
        var propertyHTML = '';
        if(special == 'page') {
            propertyHTML += '<div class="page-name">{{ pages' + traceify(attr) + traceify('title') + ' }}</div>';
        }
        if(!special) {
            propertyHTML += '<div class="property-container">';
            propertyHTML += '<div class="label ' + getType(value) + '-label">' + attr + '</div>';
        }

        if(getType(value) == 'string') {
            propertyHTML += '<div class="value-container">';
            propertyHTML += '<textarea class="string node" ng-model="pages' + trace + traceify(attr) + '"></textarea>';
            propertyHTML += '</div>';
        }
        if(getType(value) == 'object') {
            propertyHTML += '<div class="value-container">';
            for(var property in value) {
                propertyHTML += '<div class="object node">' + generateProperty(property, value[property], trace + traceify(attr)) + '</div>';
            }
            propertyHTML += '</div>';
        }
        if(getType(value) == 'array') {
            propertyHTML += '<div class="value-container">';
            for(var property in value) {
                propertyHTML += '<div class="array node">' + generateProperty(property, value[property], trace + traceify(attr), 'array') + '</div>';
            }
            propertyHTML += '</div>';
        }

        if(!special) {
            propertyHTML += '</div>';
        }

        return propertyHTML;
    }

}]);
