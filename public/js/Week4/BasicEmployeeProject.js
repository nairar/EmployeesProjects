
function TableController($scope, $http) {
    $http.get('http://employeesprojects-nairar.rhcloud.com/employees').success(function (res, err) {
        
        $scope.employees = res;
    });

    $scope.getProjects = function (employee) {
        console.log(employee);
        if (employee.projects != undefined) {
            $scope.employee = employee;
        } else {
            employee.projects = null;
            $scope.employee = employee;
        }

    }

    $scope.addProject = function (index) {
        if ($scope.newProject != null) {
            var project = {
                project: $scope.newProject
            };

            if ($scope.employees[index].projects != undefined) {
                $scope.employees[index].projects.push(project);
                $scope.apply();
            } else {
                $scope.employees[index].projects = [];
                $scope.employees[index].projects.push(project);
                $scope.apply();
            }
        }
    }

    $scope.removeProject = function (employee, index) {
        
        employee.projects.splice(index, 1);
        $scope.apply();
        
        
    }

};
