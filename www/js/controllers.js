angular.module('starter.controllers', [])

.controller('WorkCtrl', function($scope, $localStorage) {
  $scope.worktab = {   task : ''  };
/*  If there is data stored in the list display it. Otherwise display the default list*/
  if ($localStorage.workList) {
    $scope.tasks = $localStorage.workList;
  } else {
    $scope.tasks = ['A','B','C'];
  }//if/else
    //Add a task to the list
  $scope.addTask = function() {
    if ($scope.worktab.task) {
        //Input task here
      $scope.tasks.push($scope.worktab.task);

      $localStorage.workList = $scope.tasks;
        
      $scope.worktab.task = '';
    } else {//Otherwise print an alert  - http://ionicframework.com/docs/v2/api/components/alert/Alert/
      alert('Please enter a task!');
    }
  }
//Remove a task from the list - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
  $scope.removeTask = function(index) {
    delete $scope.tasks[index];

    $localStorage.workList = $scope.tasks;

  }

})

.controller('HomeCtrl', function($scope, $localStorage) {
  $scope.hometab = {    task : ''  };

  if ($localStorage.homeList) {
    $scope.tasks = $localStorage.homeList;
  } else {
    $scope.tasks = ['1', '2', '3'];
  }

  $scope.addTask = function() {
    if ($scope.hometab.task) {

      $scope.tasks.push($scope.hometab.task);

      $localStorage.homeList = $scope.tasks;

      $scope.hometab.task = '';
    } else {
      alert('Please enter a task!');
    }
  }

  $scope.removeTask = function(index) {
    delete $scope.tasks[index];

    $localStorage.homeList = $scope.tasks;

  }
})

.controller('MiscCtrl', function($scope, $localStorage) {
  $scope.misctab = {    task : ''  };

  if ($localStorage.miscList) {
    $scope.tasks = $localStorage.miscList;
  } else {
    $scope.tasks = ['One', 'Two', 'Three'];
  }

  $scope.addTask = function() {
    if ($scope.misctab.task) {
        
      $scope.tasks.push($scope.misctab.task);

      $localStorage.miscList = $scope.tasks;

      $scope.misctab.task = '';
    } else {
      alert('Please enter a task!');
    }
  }

  $scope.removeTask = function(index) {
    delete $scope.tasks[index];

    $localStorage.miscList = $scope.tasks;

  }
})
