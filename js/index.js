addClient = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = +document.getElementById("number").value;
  let subject = document.getElementById("subject").value;
  let spam = document.getElementById("cbxSpam").checked;

  if (spam) {
    alert(
      "Welcome " +
        name +
        "! Thank you for your interest in " +
        subject +
        "! We will contact you via the email provided: " +
        email +
        ", or alternatively on the phone number: 0" +
        number +
        ". "
    );
  } else {
    alert(
      "Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " +
        name +
        "If you want to sign up, you better CHECK that newsletter box! "
    );
  }
};
