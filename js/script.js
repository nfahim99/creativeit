
$(window).on('load', function(){
    $('.preloader').fadeOut(500);
})


$(function() {
    $(window).on('scroll',function() {
        if($(window).scrollTop()>400) {
            $('#backtotop').fadeIn(1000);
        }else{$('#backtotop').fadeOut(1000);}
    })

    $('#backtotop').on('click',function() {
        $('html,body').animate({
            scrollTop: 0
        },1000)
    })
})

$(function() {
    $('a').on('click', function() {
        if(this.hash !== ''){
            var hash=this.hash

            $('html,body').animate({
                scrollTop: $(hash).offset().top,
            },1000)
        }
    })
})

$(function() {
    $(window).on('scroll' , function(){
        if($(window).scrollTop() > $('#menu').height()) {
            $('#menu').addClass('menu_animate')
        }else{
            $('#menu').removeClass('menu_animate');
        }
    })

    $('.banner_class').slick( {
        prevArrow:'<i class="banner_slider_icon fas fa-arrow-left"></i>',
      nextArrow: '<i class="banner_slider_icon fas fa-arrow-right"></i>',
      dots: true,
      dotsClass: 'banner_slider_dots',
    })

    // var typed = new Typed('.typed', {
    //     strings: ['Web design', 'Graphic Design'],
    //     typeSpeed: 30,
    //     loop: true
    //   });

    // $("#typed").typed({
    //     strings: ["Typed.js is a JavaScript library.", "It tyops out", "It types out sentences.", "And then deletes them.", "Try it out!"],
    //     typeSpeed: 30,
    // callback: function(){
    // shift();
    // }
    // });
})




  


