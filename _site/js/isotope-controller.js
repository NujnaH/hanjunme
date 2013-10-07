var $container = $('#isotopeContainer');
$(document).ready(function(){
    ajaxFlickr();

    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
        }
    });
    $(".fancybox").fancybox({
    helpers : {
        title : {
            type : 'over'
        },
        overlay : {
            css : {
                'background' : 'rgba(58, 42, 45, 0.95)'
            }
        }
    },
    beforeShow: function () {
            /* Disable right click */
            $.fancybox.wrap.bind("contextmenu", function (e) {
                    return false;
            });
    }
    });
});

$('#mainBox').resize(function(e) {
    $container.isotope('reLayout', null);
});

$container.imagesLoaded(function(){
  var selector = '*';
  $container.isotope({
    filter: selector,
    animationOptions: {
     duration: 750,
     easing: 'linear',
     queue: false,

    }
  });
});

function categorize(selector1){
  var selector = "." + selector1;
  if (selector1 == "*") {
     selector = selector1;
  }
  $container.isotope({
    filter: selector,
    animationOptions: {
     duration: 750,
     easing: 'linear',
     queue: false,

    }
  });
  return false;
}
