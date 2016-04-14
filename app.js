function Main($scope, $http) {
    $http.get('https://api.github.com/users/saulfein').
        success(function(data) {
            $scope.main = data;
        });
}

function Repos($scope, $http) {
    $http.get('https://api.github.com/users/SaulFein/repos').
        success(function(data) {
            $scope.repos = data;
        });
}

function Stars($scope, $http) {
    $http.get('https://api.github.com/users/SaulFein/starred').
        success(function(data) {
            $scope.stars = data;
        });
}

function Followers($scope, $http) {
    $http.get('https://api.github.com/users/SaulFein/followers').
        success(function(data) {
            $scope.followers = data;
        });
}

function Following($scope, $http) {
    $http.get('https://api.github.com/users/SaulFein/following').
        success(function(data) {
            $scope.following = data;
        });
}
