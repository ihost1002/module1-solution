(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', LunchCheckerController);
LunchCheckerController.$injet = ['$scope'];

function LunchCheckerController($scope) {
  $scope.lunchmenu ="";
  $scope.massage ="list comma separated dishes you usually have for lunch";
  $scope.lunchcheckresult = "";
  $scope.Lunchmenucheck = function () {
    var m = $scope.lunchmenu;
    var l = splitmenubycomma(m);
    if (l.length == 1 && l == "") {
      $scope.lunchcheckresult = "Please enter data first!";

    } else if (l.length <= 3) {
      $scope.lunchcheckresult = "Enjoy!"

    } else {
      $scope.lunchcheckresult = "Too much!"

    }


  };
  function splitmenubycomma(string) {
    var result = string.split(",");
    return result;

  };
};


})();
