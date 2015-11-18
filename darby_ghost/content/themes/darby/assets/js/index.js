// This js file interacts with index.hbs

// include jquery scalable map
$(document).ready(function(e) {
  $('img[usemap]').rwdImageMaps();
});

// for modals from map and books section
$('#master_modal').on('show.bs.modal', function (event) {
  var area = $(event.relatedTarget) // Button that triggered the modal
  var title = area.data('title') // Extract info from data-* attributes
  var text = area.data('text')
  var modal = $(this)
  modal.find('.modal-title').text(title) // insert the extracted info into the modal
  modal.find('.modal-body').html(text) // this is 'html' and not 'text' because the content of the modal is formatted using html (line breaks, etc.)
})
  
// for scrolling books section. uses slick slider: http://kenwheeler.github.io/slick/
$(document).ready(function(){
  $('.books').slick({
    speed : 350, // how quickly they scroll when you click
    responsive: [ // when the browser is resized
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 5, // how many books to show in 1 screen
          slidesToScroll: 1, // how many books to scroll on each click of the right/left arrows
          infinite: false, // books should not loop
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
