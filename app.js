function Hello($scope, $http) {
    $http.get('https://api.github.com/users/saulfein').
        success(function(data) {
            $scope.greeting = data;
        });
}

function Repos($scope, $http) {
    $http.get('https://api.github.com/users/SaulFein/repos').
        success(function(data) {
            $scope.repos = data;
        });
}
