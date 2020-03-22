(function () {
  /* Скрипт: открыть меню */
  var menuTrigger = $('.js--menu-open');
  var menuClose = $('.js--menu-close');
  var navigation = $('.main-menu__overlay');
  if(menuTrigger) {
    $(menuTrigger).click(function(event){
      event.preventDefault();
      $(navigation).addClass('open');
      $('body').addClass('overflow');
    });
    $(menuClose).click(function(event){
      event.preventDefault();
      $(navigation).removeClass('open');
      $('body').removeClass('overflow');
    });
  };

  /* Карусель: наша продукция */
  var desktopWidth = 1200;
  var ourOroductsSlider = $('.js--our-products-slider');
  if((ourOroductsSlider) && (window.innerWidth < desktopWidth)) {
    $(ourOroductsSlider).slick({
      arrows: true,
      dots: false,
      mobileFirst: true,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><span class="visually-hidden">Назад</span><svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5946 0L14.3 2.70541L5.41086 11.5946L14.3 20.4838L11.5946 23.1892L4.48227e-05 11.5946L11.5946 0Z"></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><span class="visually-hidden">Вперед</span><svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.70541 0L0 2.70541L8.88919 11.5946L0 20.4838L2.70541 23.1892L14.3 11.5946L2.70541 0Z"></svg></button>',
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
    $('.slides').on('setPosition', function () {
      $(this).find('.slick-slide').height('auto');
      var slickTrack = $(this).find('.slick-track');
      var slickTrackHeight = $(slickTrack).height();
      $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
    });
  };

  /* Карусель: галерея миниатюр товара */
  $('.js--product-pictures').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.js--product-thumbnails'
  });
  $('.js--product-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.js--product-pictures',
    dots: false,
    vertical: true,
    focusOnSelect: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev"><span class="visually-hidden">Назад</span><svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5946 0L14.3 2.70541L5.41086 11.5946L14.3 20.4838L11.5946 23.1892L4.48227e-05 11.5946L11.5946 0Z"></svg></button>',
          nextArrow: '<button type="button" class="slick-next"><span class="visually-hidden">Вперед</span><svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.70541 0L0 2.70541L8.88919 11.5946L0 20.4838L2.70541 23.1892L14.3 11.5946L2.70541 0Z"></svg></button>'
        }
      },
      {
        breakpoint: 1199,
        settings: {
          arrows: false
        }
      }
    ]
  });

  /* Скрипт: Яндекс карта */
  ymaps.ready(init);

  function init() {
    var center = [53.86717640611073,27.50892967790977];
    var elamarMap = new ymaps.Map('map', {
      center: center,
      zoom: 17,
      controls: []
    });
    var elamarPlacemark = new ymaps.Placemark(center, {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/ico-marker.png',
      iconImageSize: [122, 128],
      iconImageOffset: [-61, -128]
    });
    elamarMap.geoObjects.add(elamarPlacemark);
  }

})();

