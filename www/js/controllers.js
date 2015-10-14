angular.module('app.controllers', [])

.controller('AccountCtrl', function ($state, $scope, Student) {

    $scope.account = {
        enrollment: null,
        password: null,
        name: null,
        alias: null,
        email: null,
        terms: false
    };
    $scope.validate = function () {
        Student.validate($scope.account, function (response) {
            switch (response.status) {
                case 200:
                    console.log(response);
                    $scope.account.name = response.data.name;
                    $state.go('account.signup');
                    break;
                case 401:
                    console.log('Usuário ou senha incorretos');
                    break;
                case 503:
                    console.log('Serviço não disponível');
                    break;
                default:
                    console.log('Ocorreu um erro desconhecido, estou tão surpreso quanto você, juro.');
            }
        });
    };
})

.controller('MenuCtrl', function ($state, $scope) {
    $scope.layout = {
        menu: {
            right: function () {
                switch ($state.$current.name) {
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
            get: function () {
                //TODO
                if (localStorage['config.notifications']) {
                    this.state = JSON.parse(localStorage['config.notifications']);
                }
            },
            set: function () {
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
