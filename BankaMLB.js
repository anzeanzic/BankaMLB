angular.module('BankaMLB', []);

angular.module('BankaMLB').controller('SavingsController', function($scope) {
	$scope.totalSavings = 0;

	$scope.calculateSaving = function(monthlyPayment, monthNo, interestRate) {
		if (monthlyPayment != undefined && monthNo != undefined && interestRate != undefined) {
			$scope.totalSavings = monthlyPayment*monthNo + monthlyPayment*(interestRate/100) * monthNo;
		}
	}
});

angular.module('BankaMLB').controller('PayoutController', function($scope) {
	$scope.totalPayout = 0;

	$scope.calculatePayout = function(monthlyPayout, monthNo) {
		if (monthlyPayout != undefined && monthNo != undefined) {
			$scope.totalPayout = monthlyPayout*monthNo;
		}
	}
});
