var server = 'http://localhost:1337';

angular.module('app.services', [])

.factory('Student', function($http){

    return {
        validate: function(account, callback){
            var result = {
                err: null,
                data: null
            };
            $http({
                method: 'GET',
                url: server + '/student/validate',
                headers: {
                    enrollment: account.enrollment,
                    password: account.password
                }
            }).success(function(data, status){
                result.data = data;
            }).catch(function(err){
                result.err = true;
            }).finally(function(){
                callback(result.err, result.data);
            });
        }
    };
});