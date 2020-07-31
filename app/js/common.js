$(document).ready(function () {
    $(function() {
        $('#main-menu').smartmenus({
            mainMenuSubOffsetX: -1,
            mainMenuSubOffsetY: 4,
            subMenusSubOffsetX: 6,
            subMenusSubOffsetY: -6
        });
    });

// SmartMenus mobile menu toggle button
    $(function() {
        var $mainMenuState = $('#main-menu-state');
        if ($mainMenuState.length) {
            // animate mobile menu
            $mainMenuState.change(function(e) {
                var $menu = $('#main-menu');
                if (this.checked) {
                    $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
                } else {
                    $menu.show().slideUp(250, function() { $menu.css('display', ''); });
                }
            });
            // hide mobile menu beforeunload
            $(window).bind('beforeunload unload', function() {
                if ($mainMenuState[0].checked) {
                    $mainMenuState[0].click();
                }
            });
        }
    });

});
// Main Screen Swiper Slider
var mainSlider = new Swiper ('.main-screen__swiper-container', {
    slideClass: 'main-screen__swiper-slide',
    wrapperClass: 'main-screen__swiper-wrapper',
    slidesPerView: 1,
    lazy: {
        loadPrevNext: true,
    },
    pagination: {
        el: 'swiper-pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'main-screen__swiper_bullet',
        bulletActiveClass: 'main-screen__swiper_bullet-active'
    },
    navigation: {
        nextEl: '.main-screen__slider_button-next',
        prevEl: '.main-screen__slider_button-prev',
    }
});