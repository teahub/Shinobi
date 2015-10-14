// SAILS.SOCKET.IO CONFIG
io.sails.url = 'http://10.0.221.90:1337'; // 'https://runmile.herokuapp.com';
io.sails.transports = ['websocket'];

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
            //$http({
            //    method: 'GET',
            //    url: io.sails.url + '/student/validate',
            //    headers: {
            //        enrollment: account.enrollment,
            //        password: account.password
            //    }
            //}).success(function(data, status){
            //    result.data = data;
            //}).catch(function(err){
            //    result.err = err;
            //}).finally(function(){
            //    callback(result.err, result.data);
            //});
        }
    };
});
