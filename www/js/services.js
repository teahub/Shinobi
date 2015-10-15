// SAILS.SOCKET.IO CONFIG
io.sails.url = 'http://localhost:1337';
//io.sails.url = 'http://runmile.ml:80';
//io.sails.url = 'https://runmile.herokuapp.com:80';
io.sails.transports = ['websocket']; //['polling', 'websocket'];

angular.module('app.services', [])

.factory('Connection', function($rootScope) {
    $rootScope.connection = {
        active: false,
        icon:'ion-ios-circle-outline'
    };
    io.socket.on('connect', function() {
        $rootScope.connection = {
            active: true,
            icon:'ion-ios-circle-filled'
        };
        $rootScope.$apply();
    });
    io.socket.on('disconnect', function() {
        $rootScope.connection = {
            active: false,
            icon:'ion-ios-minus-outline'
        };
        $rootScope.$apply();
    });
    io.socket.on('reconnecting', function() {
        $rootScope.connection = {
            active: false,
            icon:'ion-ios-refresh-outline'
        };
        $rootScope.$apply();
    });
    io.socket.on('reconnect', function() {
        $rootScope.connection = {
            active: true,
            icon:'ion-ios-circle-filled'
        };
        $rootScope.$apply();
    });
    io.socket.on('error', function() {
        $rootScope.connection = {
            active: false,
            icon:'ion-ios-close-outline'
        };
        $rootScope.$apply();
    });
    return {
        activity: function() {
            return $rootScope.connection.active;
        }
    };
})

.factory('Student', function(){
    return {
        validate: function(account, callback){
            var result = {
                err: null,
                data: null
            };
            io.socket.request({
                url: '/student/validate',
                method: 'get',
                headers: {
                    enrollment: account.enrollment,
                    password: account.password
                }
            }, function(response){
                callback(response);
            });
        },
        create: function(account, callback){
            io.socket.post('/student', account, function(result){
                callback(result);
            })
        }
    };
});
