
$(document).ready(function(){

$( ".sidenav-item" ).hover(function(){
  		$(this).animate({
  			height: "40%"
  		}, 200, function(){

  		});
        // $(this).css("height", "40%");
        $('.sidenav-item').not(this).animate({
        	height: "15%"
        }, 200, function(){

        });
  }, function(){
        $('.sidenav-item').animate({
        	height: "20%"
        }, 200, function(){

        });
  }
 );


});