function EmployeeController($scope, $http) {

    var urlCloud = 'http://employeesprojects-nairar.rhcloud.com/getEmployees';
    var urlLocal = 'http://localhost:3050/getEmployees';
    var urlAdd = '/add';
    var urlUpdate = '/update';
    var urlDelete = '/delete';
    
    $scope.getEmployeeDetails = function () {
        $http.get(urlLocal).success(function (res, err) {
            if (err) console.log("Error is " + err);
            $scope.employees = res.employees;
            console.log($scope.employees);
        });
    }

    $scope.edit = function (employee) {
        $scope.newEmployee = employee;
        console.log("Employee edited " + $scope.newEmployee);
        
    }

    $scope.update = function (newEmployee) {
        console.log("Before  update " + JSON.stringify(newEmployee));
     
        $http.post(urlUpdate, newEmployee).success(function (res, err) {
            if (err) console.log("Error is " + err);
            $scope.employees = res.employees;
            console.log($scope.employees);
        });
    }

    $scope.delete = function (employee) {
        $http.post(urlDelete, employee).success(function (res, err) {
            if (err) console.log("Error is " + err);
            $scope.employees = res.employees;
            console.log($scope.employees);
        });
    }

    $scope.add = function (newEmployee) {
        console.log(newEmployee.name);
        $http.post(urlAdd, newEmployee).success(function (res, err) {
            if (err) console.log("Error is " + err);
            $scope.employees = res.employees;
            console.log($scope.employees);
        });
    }

}