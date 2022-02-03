$(document).ready(function() {

    //Скрытие прелоадера
    $('.preloader_anim_1, .preloader_anim_2, .preloader_bg').delay(2000).fadeOut();
    
    //Появление окна Subscribe//
    $(".subscribe").delay(5000).show(0);
    $('html, body').delay(5000).css('overflow-y', 'hidden');
    
    //Закрытие окна Subscribe//
    $(".subscribe_close, .subscribe_bg").click(function() {
        $(".subscribe").hide(0);
        $('html, body').css('overflow-y', 'inherit');
    });
    
    //Появление окна при отправке формы//
    $(".subscribe_button, #submit").click(function() {
        $(".you_are_subscribe").delay(1000).show(0).delay(5000).hide(0);
        $(".subscribe").hide(0)
    });
    
    //Добавление адреса в ссобщение о подписке//
    $(".subscribe_input, #input_field").change(function() {
        $(".subscribe_mail").text($(this).val());
    });

    //Анимации появления фоновых изображений//
    $(".generation").waypoint(function() {
        $(".vintage_left").animate({"opacity": 1}, 500);
        $(".vintage_right_bottom").delay(200).animate({"opacity": 1}, 500)
    });
    
    $(".vintage_right_bottom").waypoint(function() {
        $(".boriosa_right").animate({"opacity": 1}, 500);
        $(".boriosa_left_bottom").delay(200).animate({"opacity": 1}, 500)
    });

    $(".boriosa_left_bottom").waypoint(function() {
        $(".retro_left").animate({"opacity": 1}, 500);
        $(".retro_center_bottom").delay(400).animate({"opacity": 1}, 500);
        $(".retro_right").delay(200).animate({"opacity": 1}, 500);
    });
    
     $(".twit").waypoint(function() {
        $(".shop_left_top_left").animate({"opacity": 1}, 500);
        $(".shop_left_top_right").delay(200).animate({"opacity": 1}, 500);
        $(".shop_center_left").delay(400).animate({"opacity": 1}, 500);
        $(".shop_center_right").delay(600).animate({"opacity": 1}, 500);
        $(".shop_right_top").delay(800).animate({"opacity": 1}, 500);
        $(".shop_left_bottom").delay(1400).animate({"opacity": 1}, 500);
        $(".shop_right_bottom_left").delay(1200).animate({"opacity": 1}, 500);
        $(".shop_right_bottom_right").delay(1000).animate({"opacity": 1}, 500);
    });
    
    //Слайдер твиттов//
    const slider = $(".owl-carousel").owlCarousel({
        items: 4,
        margin: 20,
        loop: false,
        nav: false,
        dots: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            300: {
                items: 1,
        },
            750: {
                items: 2,
        },
            900: {
                items: 2,
        },
            1250: {
                items: 3
        },
            1700: {
                items: 4
        }
        }
    });
    
    //Трансформации панели навигации//
        $(window).scroll(function () {
            display = $(this).scrollTop() >= 100;
            if(display){
                $("#logo").fadeOut(0);
                $(".arrow").fadeIn(0);
                $("#top_nav").removeClass("nav_scroll");
            }
            else {
                $(".arrow").fadeOut(0);
                $("#logo").fadeIn(0);
                $("#top_nav").addClass("nav_scroll");
            }
        });
})