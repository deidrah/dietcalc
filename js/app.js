(function () {

    "use strict";

    const app = angular.module("app", []);

    app.controller("CalcCtrl", function ($scope) {
        $scope.calculate = function () {
            if ($('#sk').prop('checked')) {
            $scope.ppm = parseInt(655.1 + (9.563 * $scope.w) + (1.85 * $scope.h) - (4.676 * $scope.a));
                }
            else {
                $scope.ppm = parseInt(66.5 + (13.75 * $scope.w) + (5.003 * $scope.h) - (6.775 * $scope.a));
            }
            $scope.cpm = parseInt($scope.ppm * 1.4);
            $scope.reduction = parseInt($scope.cpm * 0.8);
            $scope.bg = parseInt($scope.w * 1.5);
            $scope.bc = parseInt($scope.bg * 4);
            $scope.tc = parseInt($scope.cpm * 0.3); 
            $scope.tg = parseInt($scope.tc / 9);
            $scope.wc = parseInt($scope.cpm - $scope.bc - $scope.tc);
            $scope.wg = parseInt($scope.wc / 4);
        };
        
    });
})();
