angular.module('app', ['chart.js', 'ngSanitize'])

.controller('MainController', function($scope, Backend){

  $scope.patients = [
    {name:'Satchel French', place: 'Rm 121', img: 'https://umpetrogeo.files.wordpress.com/2011/03/patrickgou_passport-size_cropped.jpg', total_time: 1530,
    call_count:143
    },
    {name:'Yuan Chen', place: 'Rm 142', img: 'http://buzzcard.gatech.edu/PublishingImages/passport2.png', total_time: 430,
    call_count: 33
    },
    {name:'Dave Frankie', place: 'Rm 154', img: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Passport_Size_Image_of_Nouman.jpg', total_time: 630,
    call_count: 73
    },
    {name:'Waiyanphyo Hein', place: 'Rm 44', img: 'http://blogs.brightspyre.com/wp-content/uploads/2015/01/ORGINAL-KARTHIK-PASSPORT-SIZE.jpg ', total_time: 1030,
    call_count: 93
    }
  ];

  $scope.r_graph_data = {labels: []};
  $scope.f_graph_data = {labels: []};
  $scope.r_graph_data2 = [];
  $scope.f_graph_data2 = [];

  for (var i = 0 ; i < $scope.patients.length; i++) {
  	console.log($scope.patients[i]);
		$scope.r_graph_data.labels.push($scope.patients[i].name);
		$scope.f_graph_data.labels.push($scope.patients[i].name);

		$scope.r_graph_data2.push($scope.patients[i].call_count);
		$scope.f_graph_data2.push($scope.patients[i].total_time/$scope.patients[i].call_count);
	}
	console.log($scope.r_graph_data.labels);


	/* Frequency (Dummy Data) */
	$scope.f_graph = {
		labels: $scope.r_graph_data.labels,
  	series: ['Patient'],
  	data: [$scope.r_graph_data2],
  	datasetOverride: [{ yAxisID: 'y-axis-1' }],
  	options: {
	    scales: {
	      yAxes: [{
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }]
	    }
	  }
  };

  /* Response Timing (Dummy Data) */
  $scope.r_graph = {
		labels: $scope.r_graph_data.labels,
  	series: ['Patient'],
  	data: [$scope.r_graph_data2],
  	datasetOverride: [{ yAxisID: 'y-axis-1' }],
  	options: {
	    scales: {
	      yAxes: [{
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }]
	    }
	  }
  };


	



});
