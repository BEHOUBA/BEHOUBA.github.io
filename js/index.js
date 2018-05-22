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