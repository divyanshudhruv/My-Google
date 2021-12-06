function myFunction() {
  $a = document.getElementById("mainText").value;
  let url = "https://www.google.com/search?q=" + $a;
  window.open(url);
}
//----------------------------------------------------
function myFunction2() {
  let url = "https://play.google.com";
  window.open(url);
}

function myFunction3() {
  let url = "https://maps.google.com";
  window.open(url);
}

function myFunction4() {
  let url = "https://youtube.com";
  window.open(url);
}

function openNav() {
  document.getElementById("mySidebar").style.animation =
    "2s rollIn ease-in-out";
  document.getElementById("mySidebar").style.visibility = "visible";
}

document.addEventListener("click", function (evt) {
  let flyoutEl = document.getElementById("mySidebar");
  targetEl = evt.target; // clicked element
  do {
    if (targetEl == flyoutEl) {
      // This is a click inside, does nothing, just return.
      document.getElementById("mySidebar").style.animation = "2s rollOut ease-in-out"
      setTimeout(() => {
        document.getElementById("mySidebar").style.visibility = "hidden";
      }, 2000);

      return;
    }
    // Go up the DOM
    targetEl = targetEl.parentNode;
  } while (targetEl);
  // This is a click outside.
  document.getElementById("mySidebar").style.width = "250px"

});




function myFunction5() {
  $b = document.getElementById("mainText").value;
  if ($b == "My-Google") {
    document.getElementById("confettis").style.visibility = "visible"
    setTimeout(() => {
      document.getElementById("confettis").style.animation =
        " confetti 5s ease-in-out -2s infinite;";
    });
  }

}
