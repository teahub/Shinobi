angular.module('app.controllers', [])

.controller('AccountCtrl', function($scope) {
        $scope.account = {
            matricula: null,
            senha: null
        };
        //TODO
})

.controller('MenuCtrl', function($state, $scope) {
        $scope.layout = {
            menu: {
                right: function() {
                    switch($state.$current.name) {
                        case 'menu.ranking':
                            return true;
                            break;
                        default:
                            return false;
                    }
                }
            }
        };
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

        // DATA

        $scope.me = {
            name: 'Anônimo da Silva',
            score: 1200,
            dans: ['adm', 'eng', 'infra']
        }

});
