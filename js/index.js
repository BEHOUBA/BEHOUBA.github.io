$(document).ready(function(){
  $("#about").click(function(){
     $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
  })
  $("#portfolio").click(function(){
     $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 2000);
    return false;
  })
  $("#contact").click(function(){
     $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 2000);
    return false;
  })
  
  $("#Top").mouseout(function(){
    $("#Top").css('opacity','0.9')
  })
  $("#Top").mouseover(function(){
    $("#Top").css('opacity','1')
  })
})