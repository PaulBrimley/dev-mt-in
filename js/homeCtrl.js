angular.module('devMtIn').controller('homeCtrl', function($scope, profileService) {

	$scope.sortOptions = [{
		display: 'Ascending',
		value: false
	},
	{
		display: 'Descending',
		value: true
	}];

	$scope.editing = false;

	$scope.saveProfile = function(profile) {
		profileService.saveProfile(profile);
		$scope.editing = false;
	}

	$scope.deleteProfile = function(profile) {
		profileService.deleteProfile().then(function(deletedProfile) {
			localStorage.removeItem('profileId');
			$scope.myProfile = {};
		}).catch(function(err) {
			console.error(err);
		});
		$scope.myProfile = profileService.checkForProfile();
		$scope.editing = false;
	}

	$scope.checkForProfile = function() {
		var profileId = JSON.parse(localStorage.getItem('profileId'));
		if(profileId) {
			profileService.checkForProfile(profileId.profileId).then(function(profile) {
				$scope.myProfile = profile.data;}).catch(function(err) {console.err(err)});
		}
	}
	$scope.checkForProfile();

});