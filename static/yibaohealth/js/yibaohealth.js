// var $ = require("jquery.js");

var audio = document.querySelector("audio");
$(".musical").click(function(){
     console.log(1)
   if(audio.paused){
       audio.play();
       $(".musical").css({
          "opacity":"1"
       });
       $(".music").css("animationPlayState","running");
   }
   else{
       audio.pause();
       $(".musical").css({
           "opacity":"0"
       });
       $(".music").css("animationPlayState","paused");
   }
});

var myswiper = new Swiper('.swiper-container',{
//      autoplay:3000,
    direction:'vertical',
    pagination:'.swiper-pagination',
    loop:true,
    paginationClickable :true,

    onInit: function(swiper){
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);

    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper);
    }
});
