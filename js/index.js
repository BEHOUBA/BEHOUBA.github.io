window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("nav_top").style.top = "0px";
    } else {
        document.getElementById("nav_top").style.top = "5px";
    }
}

function sendEmail() {
  var form = document.getElementById("contact_form");
  var subjet = document.getElementById("subjet").value;
  var name = document.getElementById("name").value;
  var body = document.getElementById("body").value;
  console.log(body.length)
  if (body !== "") {
    form.action = `mailto:behouba@gmail.com?subject=${subjet}&body=${body}`;
    form.submit();
    return;
  }
  alert("Veillez ecrire votre message s'il vous plait");
}


$('#home').click(() => {
  $('html, body').animate({
      scrollTop: $('#home_main_img').offset().top
  }, 300);
});

$('#about_btn').click(() => {
  $('html, body').animate({
      scrollTop: $('#about_me').offset().top
  }, 300);
});
$('#portfolio_btn').click(() => {
  $('html, body').animate({
      scrollTop: $('#portfolio').offset().top
  }, 300);
});
$('#contact_btn').click(() => {
  $('html, body').animate({
      scrollTop: $('#contact').offset().top
  }, 300);
});