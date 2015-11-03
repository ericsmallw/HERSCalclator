/**
 * Created by Eric on 11/1/2015.
 */

var app = angular.module("app", []);

app.controller("Controller", function($scope){

});

app.directive('herscalculator', function(){
    var calculatorController = ['$scope', function($scope){
        $scope.utilityValues = {
            gas: 0,
            electricity: 0,
            water: 0
        };
        $scope.hersScores = [
            { offset: 2058, score: 50 },{ offset:2099, score: 51 },{ offset: 2141, score: 52 },{ offset:2182, score: 53 },
            { offset: 2223, score: 54 },{ offset:2264, score: 55 },{ offset: 2305, score: 56 },{ offset: 2388, score: 58 },
            { offset: 2429, score: 59 },{ offset: 2470, score: 60 },{ offset: 2511, score: 61 },{ offset: 2552, score: 62 },
            { offset: 2593, score: 63 },{ offset: 2635, score: 64 },{ offset: 2676, score: 65 },{ offset: 2717, score: 66 },
            { offset: 2758, score: 67 },{ offset: 2799, score: 68 },{ offset: 2840, score: 69 },{ offset: 2882, score: 70 },
            { offset: 2923, score: 71 },{ offset: 2964, score: 72 },{ offset: 3005, score: 73 },{ offset: 3046, score: 74 },
            { offset: 3087, score: 75 },{ offset: 3129, score: 76 },{ offset: 3170, score: 77 },{ offset: 3211, score: 78 },
            { offset: 3252, score: 79 },{ offset: 3293, score: 80 },{ offset: 3334, score: 81 },{ offset: 3376, score: 82 },
            { offset: 3417, score: 83 },{ offset: 3458, score: 84 },{ offset: 3499, score: 85 },{ offset: 3540, score: 86 },
            { offset: 3581, score: 87 },{ offset: 3623, score: 88 },{ offset: 3664, score: 89 },{ offset: 3705, score: 90 },
            { offset: 3746, score: 91 },{ offset: 3787, score: 92 },{ offset: 3828, score: 93 },{ offset: 3870, score: 94 },
            { offset: 3911, score: 95 },{ offset: 3952, score: 96 },{ offset: 3993, score: 97 },{ offset: 4034, score: 98 },
            { offset: 4075, score: 99 }, { offset:4117, score: 100 },{ offset: 5352, score: 130 }];
        $scope.selectedScore = $scope.hersScores[14];
        $scope.annualSavings = 0;
        $scope.percentageSavings = 0;
        $scope.monthlySavings = 0;


        $scope.$watch("utilityValues", function(){
            total();
            calculateSavings();
        }, true);

        $scope.calculateSavings = calculateSavings;

        $scope.total = total;

        function total(){
            return $scope.utilityValues.gas + $scope.utilityValues.water + $scope.utilityValues.electricity;
        }

        function calculateSavings() {
            var anValue = total() * 12;
            var moneyBenefit = 0.00;
            var moneyBenefitMonth = 0.00;
            var interestBenefit = 0;
            var delta = anValue - $scope.selectedScore.offset;
            if(delta > 0) {
                moneyBenefit = delta;
                moneyBenefitMonth = Math.round(moneyBenefit/12);
                interestBenefit = parseInt((delta/anValue)*100);
            }
            $scope.percentageSavings = interestBenefit;
            $scope.monthlySavings = moneyBenefitMonth;
            $scope.annualSavings = moneyBenefit;
        }
    }];

   return {
       restrict: 'E',
       scope: {},
       controller: calculatorController,
       templateUrl: "calculator.html"
   }
});



