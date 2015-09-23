angular.module('app.controllers', [])

.controller('AccountCtrl', function($scope) {
        //TODO
})

.controller('MenuCtrl', function($scope) {

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
