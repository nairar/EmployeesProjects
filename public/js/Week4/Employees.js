function EmployeeController($scope, $http) {

    var urlCloud = 'http://employeesprojects-nairar.rhcloud.com/getEmployees';
    var urlLocal = 'http://localhost:3050/getEmployees';
    
    $scope.getEmployeeDetails = function () {
        $http.get(urlCloud).success(function (res, err) {
            $scope.employees = res.employees;
        });
    }

}