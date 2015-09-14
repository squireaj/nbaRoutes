var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

	this.addNewGame = function(gameObj) {
		var url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;
		if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
				gameObj.won = true;
		}
		else {
				gameObj.wone = false;
		}
		return $http({
			method: 'POST',
			url: url,
			data: gameObj
		})

	} //***** addNewGame

	this.getTeamData = function(team) {
		var deferred = $q.defer();
		var url = 'https://api.parse.com/1/classes/' + team;
		$http({
			method: 'GET',
			url: url,
		}).then(function(data) {
			var results = data.data.results;
			var wins = 0;
			var losses = 0;
			for(var i = 0; i < results.length; i++) {
				if(results[i].won === true){
					wins++;
				}
				else {
					losses++;
				}	
			}
			results.wins = wins;
			results.losses = losses;
			deferred.resolve(results);
		})
		return deferred.promise;
	} //***** getTeamData

		this.getAllData = function(){
		var promises = [this.getTeamData('utahjazz'), this.getTeamData('losangeleslakers'), this.getTeamData('miamiheat')];
		console.log(promises);
		return $q.all(promises);
	}


}); //End


  // this.getUsers = function() {
  // 	var dfd = $q.defer();
  //   $http({
  //       method: 'GET',
  //       url: 'http://reqr.es/api/users?page=1'
  //   }).then(function(responce) {
  //   	parsedResponse = responce.data.data;
  //   	for (var i = 0; i < parsedResponse.length; i++) {
  //   		parsedResponse[i].first_name = 'Ralf';
  //   	}
  //   	dfd.resolve(parsedResponse)
  //   })
  //   return dfd.promise;
  // }