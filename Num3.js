let text = "Do you agree to share your personal information with this site?"
 if (confirm(text) == true) {
    console.log("Name: " + nickname + "\n Height: " + feet + "\'" + inch + "\"" + "\n Weight: " + lbs + "lbs");
 } else {
    console.log("User does not wish to share his/her information.");
 }