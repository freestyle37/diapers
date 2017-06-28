$(document).ready(function() {

  $(".fa-chevron-down").on('click',function() {
    $(".header-main .header-inner .about-us > div").show();
    $(".kt").hide();
    $(".header-main .header-center .header-inner .phone-main").css("align-items", "center");
    $(".header-main .header-center .header-inner .phone-main .phone-main-number").css("margin-top", "0");
    $(".fa-chevron-up").on('click',function() {
      $(".header-main .header-inner .about-us > div").hide();
      $(".kt").show();
    });
  }); 

  $(".color-option").on('click',function() {
    $(".container-for-colors").slideToggle("slow");
  });

  $(".pink").on('click',function() {
    $("*").css("color", "pink");
    $(".container-for-colors").slideToggle("slow");
    $(".page").css("background", "rgba(34, 41, 72, 0.41)");
  });
  $(".green").on('click',function() {
    $("*").css("color", "green");
    $(".container-for-colors").slideToggle("slow");
    $(".page").css("background", "rgba(15, 43, 20, 0.27)");
  });
  $(".blue").on('click',function() {
    $("*").css("color", "blue");
    $(".container-for-colors").slideToggle("slow");
    $(".page").css("background", "rgba(69, 226, 219, 0.27)");
  });
  $(".light-green").on('click',function() {
    $("*").css("color", "lightgreen");
    $(".container-for-colors").slideToggle("slow");
    $(".page").css("background", "rgba(0, 0, 0, 0.27)");
  });
  $(".dark-blue").on('click',function() {
    $("*").css("color", "#121f37");
    $(".container-for-colors").slideToggle("slow");
    $(".page").css("background", "rgba(73, 76, 33, 0.27)");
  });
  $(".yellow").on('click',function() {
    $("*").css("color", "yellow");
    $(".container-for-colors").slideToggle("slow");
    $(".page").css("background", "rgba(38, 27, 41, 0.28)");
  });
  $(".violet").on('click',function() {
    $("*").css("color", "violet");
    $(".container-for-colors").slideToggle("slow");
    $(".page").css("background", "rgba(144, 79, 118, 0.27)");
  });
  $(".light-orange").on('click',function() {
    $("*").css("color", "#fdd07d");
    $(".container-for-colors").slideToggle("slow");
    $(".page").css("background", "rgba(177, 253, 249, 0.04)");
  });
  $(".cyan").on('click',function() {
    $("*").css("color", "cyan");
    $(".container-for-colors").slideToggle("slow");
    $(".page").css("background", "rgba(85, 251, 136, 0.27)");
  });
  $(".orange").on('click',function() {
    $("*").css("color", "orange");
    $(".container-for-colors").slideToggle("slow");
    $(".page").css("background", "rgba(177, 253, 249, 0.04)");
  });



}); 