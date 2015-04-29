app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('/', {
            url:'/',
            templateUrl: 'views/main/main.html',
            controller: 'MainController'
        });
    }]);

app.controller('MainController', ['$scope', 'goPage', function ($scope, goPage) {
       

    }]);



