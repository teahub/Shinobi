angular.module('app.controllers', [])

.controller('AppCtrl', function($scope) {

        $scope.config = {
            notifications: {
                state: false,
                get: function(){
                    //TODO
                    if (localStorage['config.notifications']) {
                        this.state = JSON.parse(localStorage['config.notifications']);
                    }
                },
                set: function(){
                    localStorage['config.notifications'] = this.state;
                }
            }
        };
        $scope.config.notifications.get();

});