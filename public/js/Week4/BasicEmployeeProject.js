
function TableController($scope, $http) {
    $http.get('http://employeesprojects-nairar.rhcloud.com/employees').success(function (res, err) {
        
        $scope.employees = res;
    });

    $scope.getProjects = function (employee) {
        console.log(employee);
        if (employee.projects != undefined) {
            $scope.employee = employee;
        } else {
            $scope.employee.projects = [];
            $scope.employee.projects.push(employee.projects);
            $scope.apply();
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

    $scope.removeProject = function (employee) {
        var index = $scope.employees.indexOf(employee);
        $scope.employees.splice(index, 1);
        
    }

};
