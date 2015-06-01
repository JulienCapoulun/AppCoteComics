angular.module('starter.services', [])

// .factory('Videos', function($http) {
//   // Might use a resource here that returns a JSON array
//   // $.ajax({
//   //   type: "GET",
//   //   url: "http://gdata.youtube.com/feeds/base/users/CoteComics/uploads?v=2&alt=rss&client=ytapi-youtube-rss-redirect&orderby=updated",
//   //   dataType: "jsonp",
//   //   success: function(data){
//   //     console.log(data);
//   //   }
//   // });

//  var videos = [];

//   $http.jsonp('http://gdata.youtube.com/feeds/base/users/CoteComics/uploads?v=2&alt=json&client=ytapi-youtube-rss-redirect&orderby=updated&callback=JSON_CALLBACK').
//   success(function(data, status, headers, config) {
//     // this callback will be called asynchronously
//     // when the response is available
//     for(var i=0; i<data.feed.entry.length; i++) {
//       var video =  [{
//         id : i,
//         url: data.feed.entry[i].link[0].href,
//         img: 'img/player-default.jpg',
//         title: data.feed.entry[i].title.$t,
//         description: data.feed.entry[i].content.$t
//       }]
//       videos.push(video);
//     }
//   }).
//   error(function(data, status, headers, config) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });


//   return {
//     all: function() {
//       return videos;
//     },
//     get: function(videoId) {
//         return videos[videoId];
//       }
//     }
// })

/**
 * A simple example service that returns some data.
 */
.factory('Membres', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var membres = [{
    id: 0,
    name: 'Jeff',
    notes: 'Présentateur.',
    face: 'img/jeff.jpg'
  }, {
    id: 1,
    name: 'Julien',
    notes: 'Chroniqueur. Aime bien les crêpes.',
    face: 'img/julien.jpg'
  }, {
    id: 2,
    name: 'Alex',
    notes: 'Réalisateur. Aime prendre la tête aux chroniqueurs.',
    face: 'img/alex.jpg'
  }];


  return {
    all: function() {
      return membres;
    },
    get: function(membreId) {
      // Simple index lookup
      return membres[membreId];
    }
  }
});
