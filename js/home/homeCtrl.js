var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, teamService, teamData){
$scope.teamData = teamData;
console.log(teamData)
	for(var i = 0; i < $scope.teamData.length; i++){
		if($scope.teamData[i][1].homeTeam === 'utahjazz'){
			$scope.teamData[i].homeTeam = 'Utah Jazz',
			$scope.teamData[i].logoPath = '../images/jazz-logo.png';
		} else if($scope.teamData[i][1].homeTeam === 'losangeleslakers'){
			$scope.teamData[i].homeTeam = 'Los Angeles Lakers';
			$scope.teamData[i].logoPath = '../images/lakers-logo.png';
		} else if($scope.teamData[i][1].homeTeam === 'miamiheat'){
			$scope.teamData[i].homeTeam = 'Miami Heat';
			$scope.teamData[i].logoPath = '../images/heat-logo.png';
		}
	}

});