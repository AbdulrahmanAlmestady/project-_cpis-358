function changeLoginBanner() {
  var now = new Date();       
  var hour = now.getHours();  
  var message ;

  // it's morning
  if (hour < 12)
    message = "Good Morning";

  
  if (hour >= 12) {
    // before 6 PM
    if (hour < 18)
      message = "Good Afternoon";

    //  after 6 PM
    if (hour >= 18)
      message = "Good Evening";
  } // end if

  document.getElementById("top").style.backgroundImage = "url(workshop.jpg)";
  document.getElementById("bannerTitle").innerHTML = message;
  document.getElementById("bannerLine").innerHTML = "Welcome back to Artizan!";
}

function validateLogin() {
  var email = document.forms["loginForm"]["email"].value;
  if (email == "") {
    window.alert("Email must be filled out");
    return false;
  }

  var password = document.forms["loginForm"]["password"].value;
  if (password == "") {
    window.alert("Password must be filled out");
    return false;
  }
}

function validateSignup() {
  var password = document.forms["signupForm"]["password"].value;
  var password2 = document.forms["signupForm"]["password2"].value;

  if (password == "") {
    window.alert("Password must be filled out");
    return false;
  }

  if (password != password2) {
    window.alert("Passwords do not match");
    return false;
  }
}