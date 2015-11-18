
// Include jQuery Scalable Map

$(document).ready(function(e) {
  $('img[usemap]').rwdImageMaps();
});

$('#master_modal').on('show.bs.modal', function (event) {
  var area = $(event.relatedTarget) // Button that triggered the modal
  var title = area.data('title') // Extract info from data-* attributes
  var text = area.data('text')
  var modal = $(this)
  modal.find('.modal-title').text(title)
  modal.find('.modal-body').html(text)
})
  
$(document).ready(function(){
  $('.books').slick({
    mobileFirst: false,
    variableWidth: true,
    speed : 350,
    centerMode: false,
    dots: false,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        }
      }
    ]
  });
});     
