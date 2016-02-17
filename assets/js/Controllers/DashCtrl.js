kiosk.controller('DashCtrl', ['$scope', '$window', '$interpolate', '$rootScope', '$state', 'Auth', 'ServerData', function($scope, $window, $interpolate, $rootScope, $state, Auth, ServerData) {
    $scope.pages = ServerData.get();
    $scope.properties = []

    // Tab Code
    $scope.tab = 0;
    $scope.switchTo = function switchTo(tabIndex) {
        $scope.tab = tabIndex;
        $window.scrollTo(0, 0);
    }
    $scope.preview = function preview() {
        $state.go('main', { showBack: true });
    }

    // Editor Code
    $scope.addElement = function addElement(selected) {
        var array = eval('$scope.pages' + selected);
        var newArrayElement = {};

        for(var property in array[0]) {
            newArrayElement[property] = '';
        }

        array.push(newArrayElement);
        reload();
    }

    $scope.removeElement = function removeElement(selected, index) {
        var array = eval('$scope.pages' + selected);
        array.splice(index, 1);

        reload();
    }

    function reload() {
        for(var i = 0; i < $scope.pages.length; i++) {
            var pageHTML = '';

            pageHTML += generateProperty(i, $scope.pages[i], '', 'page');

            $scope.properties[i] = pageHTML;
        }
    }

    reload();

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

        if(attr == '$$hashKey') {
            return propertyHTML;
        }

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
                propertyHTML += '<div class="array node">';
                propertyHTML += generateProperty(property, value[property], trace + traceify(attr), 'array');
                propertyHTML += '<div class="remove-element" ng-click="removeElement(\'' + trace + traceify(attr) + '\', ' + property + ')">Remove this element</div>';
                propertyHTML += '</div>';
            }

            var readibleTrace = '';
            var fullTrace = trace;
            fullTrace = fullTrace.split('.');
            for(var i = 1; i < fullTrace.length; i++) {
                readibleTrace += fullTrace[i] + '.';
            }
            readibleTrace += traceify(attr);
            readibleTrace = readibleTrace.replace('..', '.');

            propertyHTML += '<div class="add-element" ng-click="addElement(\'' + trace + traceify(attr) + '\')">Add a new element to ' + readibleTrace + '</div>';

            propertyHTML += '</div>';
        }

        if(!special) {
            propertyHTML += '</div>';
        }

        return propertyHTML;
    }

}]);
