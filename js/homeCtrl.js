angular.module('devMtIn').controller('homeCtrl', function($scope) {

	$scope.myProfile =  {

		friends: [{name: 'Eric'}, {name: 'Phil'}, {name: 'Landon'}, {name: 'Joe'}, {name: 'Jess'}]
	};

	$scope.sortOptions = [{
		display: 'Ascending',
		value: false
	},
	{
		display: 'Descending',
		value: true
	}];

});