$(document).ready(function(){
	 var $sticky = $('.enquirw-box');
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 600) { $sticky.addClass('enquirw-active');}
        else { $sticky.removeClass('enquirw-active'); }
    });

  $('.close_menu a').click(function(){$('.navbar-collapse').removeClass('in');});

  $(".gallery").latae({loader:'img/loader.gif',init:function(){console.log('bonjour');},loadPicture:function(event,img){console.log($(img));},resize:function(event,gallery){console.log(gallery);},displayTitle:true});$().fancybox({selector:'[data-fancybox="images"]',thumbs:false,hash:false,});

  $(".contact_info").click(function(){$(".enquirw-box").toggleClass('open-cl');});

      // $('.img-slider').owlCarousel({
      //   margin: 15,
      //   autoplay:true,
      //   loop: true,
      //   nav:true,
      //   navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      //   dots:false,
      //   autoHeight:true,
      //   responsiveClass: true,
      //   responsive: {
      //     0:{items: 1},
      //     600:{items: 2},
      //     768:{items: 3}
      //   }
      // });

});
