this.console.log('notification JS loaded');
$(function(){
    window.addEventListener("message", function(event){   

      var item = event.data;
      if (item !== undefined && item.type === "ui") {		                
        if (item.display === true) {
                    $("#progressbar").show();
                              var start = new Date();
          var maxTime = item.time;
          var text = item.text;
          var timeoutVal = Math.floor(maxTime/100);
          animateUpdate();
          $('#pbar_innertext').text(text);
          function updateProgress(percentage) {
              $('#pbar_innerdiv').css("width", percentage + "%");
          }
          function animateUpdate() {
            var now = new Date();
            var timeDiff = now.getTime() - start.getTime();
            var perc = Math.round((timeDiff/maxTime)*100);
            if (perc <= 100) {
              updateProgress(perc);
              setTimeout(animateUpdate, timeoutVal);
            } else {
              $("#progressbar").hide();
            }
          }
        }
      }
        else if(event.data.options){
          var options = event.data.options;
          new Noty(options).show();
        }else if( event.data.maxNotifications !== undefined){
          var maxNotifications = event.data.maxNotifications;
          Noty.setMaxVisible(maxNotifications.max, maxNotifications.queue);
        } else {
          $("#progressbar").hide();
      }


    });
});
