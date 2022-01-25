$(document).ready(function() {

    //Задержка появления окна Subscribe//
    $(".subscribe").hide(0).delay(3000).show(0);
    
    
    //Закрытие окна Subscribe//
    $(".subscribe_close").click(function() {
        $(".subscribe").hide(0);
    });
    
    //Появление окна при отправке формы//
    $(".subscribe_button").click(function() {
        $(".you_are_subscribe").delay(1000).show(0).delay(5000).hide(0);
        $(".subscribe").hide(0)
    });
    
    //Добавление адреса в ссобщение о подписке//
    $(".subscribe_input").change(function() {
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
    
     $(".twit_text").waypoint(function() {
        $(".shop_left_top_left").animate({"opacity": 1}, 500);
        $(".shop_left_top_right").delay(200).animate({"opacity": 1}, 500);
        $(".shop_center_left").delay(400).animate({"opacity": 1}, 500);
        $(".shop_center_right").delay(600).animate({"opacity": 1}, 500);
        $(".shop_right_top").delay(800).animate({"opacity": 1}, 500);
        $(".shop_left_bottom").delay(1400).animate({"opacity": 1}, 500);
        $(".shop_right_bottom_left").delay(1200).animate({"opacity": 1}, 500);
        $(".shop_right_bottom_right").delay(1000).animate({"opacity": 1}, 500);
    });
})