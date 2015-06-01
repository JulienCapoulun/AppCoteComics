angular.module('starter.controllers', ['youtube-embed'])

.controller('DashCtrl', function($scope) {

})


.controller('VideosCtrl', function($scope, $http) {
  $scope.videos = [];
  $http.jsonp('http://gdata.youtube.com/feeds/base/users/CoteComics/uploads?v=2&alt=json&client=ytapi-youtube-rss-redirect&orderby=updated&callback=JSON_CALLBACK').
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    for(var i=0; i<data.feed.entry.length; i++) {
      var video =  [{
        id : i,
        url: data.feed.entry[i].link[0].href,
        img: 'img/player-default.jpg',
        title: data.feed.entry[i].title.$t,
        description: data.feed.entry[i].content.$t
      }]
      $scope.videos.push(video);
    }
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
})

.controller('VideoDetailCtrl', function($scope, $http, $stateParams) {
  $scope.videos = [];
  $http.jsonp('http://gdata.youtube.com/feeds/base/users/CoteComics/uploads?v=2&alt=json&client=ytapi-youtube-rss-redirect&orderby=updated&callback=JSON_CALLBACK').
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    for(var i=0; i<data.feed.entry.length; i++) {
      var header = data.feed.entry[i].title.$t.split('-');
      var header = header[0];
      var video =  [{
        id : i,
        url: data.feed.entry[i].link[0].href,
        img: 'img/player-default.jpg',
        title: data.feed.entry[i].title.$t,
        header: header,
        description: data.feed.entry[i].content.$t
      }]
      $scope.videos.push(video);
    }
    $scope.video = $scope.videos[$stateParams.videoId][0];
    $scope.url = $scope.video.url;
    console.log($scope.video['header']);
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
})

.controller('MembresCtrl', function($scope, Membres) {
  $scope.membres = Membres.all();
})

.controller('MembreDetailCtrl', function($scope, $stateParams, Membres) {
  $scope.membre = Membres.get($stateParams.membreId);
})


