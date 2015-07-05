 var player;
      function onYouTubeIframeAPIReady() {
        console.log("Inside onYouTubeIframeAPIReady");
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: '7FhsRxNAgNg',
          playerVars: {
                enablejsapi:'1',
                origin:'chrome-extension:\\jdpffcgpaobhjjkipkcjoacnhhplgkii'
        },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      $('#player')[0].src+="&autoplay=1";
      }


      function onPlayerReady(event) {
        console.log("Inside onPlayerReady");
        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 60000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }



$(window).load(function() {


//2. This code loads the IFrame Player API code asynchronously.-->

      var playerDiv = document.createElement('div');
      playerDiv.id="player";
      document.body.appendChild(playerDiv);
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      console.log("Finished loading iframe API");
});