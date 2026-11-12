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

document.getElementById("top").onclick = changeLoginBanner;
