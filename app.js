var main = function(){
   $('.icon-menu').click(function(){
     $('.menu').animate({
     'left': '0px'
     },210);
     $('body').animate({
     'left':'285px'
     });
   }); 
};

$(document).ready(main);
