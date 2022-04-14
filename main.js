'use strict';

$(function () {

  // ハンバーガーメニュー
  $('#menu-btn').on('click', function () {
    if ($('header').hasClass('open')) {
      $('header').removeClass('open');
    }
    else {
      $('header').addClass('open');
    }
  });

  $('#mask').on('click', function () {
    $('header').removeClass('open');
  });

  $('#global-menu').on('click', function () {
    $('header').removeClass('open');
  });


  // slickスライダー
  $('.cake-imgs').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  // フェード表示
  $('.inview').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass('show');
    }
  });

  
  // サイドボタンの表示・非表示
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let menu_position = $('#menu').offset().top - $(window).height();
    let location_position = $('#location').offset().top - $(window).height();

    if (window.innerWidth > 900) {
      // スクロール位置が、画面下から#menuまでの距離を超えた場合（＝#menuが表示された時）
      if (scroll > menu_position) {
        // #locationが表示されるまでの間
        if (scroll < location_position) {
          $('#side-btn').addClass('appear');
        } else {
          // 非表示
          $('#side-btn').removeClass('appear');
        }
        // #menuが表示される前は、非表示
      } else {
        $('#side-btn').removeClass('appear');
      }
      // spでは非表示
    } else {
      $('#side-btn').removeClass('appear');
    }
  });


// ページトップボタンの表示
  var pagetop = $('#page-top');
  pagetop.hide();

  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
// ページトップボタンのクリックイベント
  pagetop.click(function(){
    $('body, html').animate({scrollTop:0}, 300);
    return false;
  });














});
