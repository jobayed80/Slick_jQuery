

//  JQuery  Function STart ---------------------

$(function () {

    // Banner slider start for Banner 1 , 2 , 3

    $('.banner1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
         dots: true,
    });

    $('.banner_item2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        dots: true,
    });
       // Banner slider end for Banner 1 , 2 , 3




    //  Bannner 4  -----------------
    $('.banner_big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.banner_small'
      });
      $('.banner_small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.banner_big',
        // dots: true,
        centerMode: true,
        focusOnSelect: true
      });


      // ---------- CountDown STart -------------
      $('#getting-started').countdown('2015/01/01', function(event) {
        $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
      });



});

//  JQuery  Function End ---------------------