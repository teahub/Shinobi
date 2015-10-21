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
        Student.validate($scope.account, function (data, res) {
            switch (res.statusCode) {
                case 200:
                    $scope.account.name = data.name;
                    $state.go('account.signup');
                    break;
                case 401:
                    alert('Usuário ou senha incorretos');
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
    $scope.register = function () {
        Student.create($scope.account, function(data, res) {
            switch (res.statusCode) {
                case 200:
                    alert('Cadastro realizado com sucesso!');
                    $state.go('menu.profile', {});
                    break;
                case 400:
                    console.dir(data.invalidAttributes);
                    console.dir(data);
                    break;
                default:
                    console.dir(data);
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
