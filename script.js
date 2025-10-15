    document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById("slideshow");
    const btn = document.getElementById("dynamicBtn");
    const orElement = document.querySelector(".or");
    const emailElement =document.querySelector(".email");
    const googleElement =document.querySelector(".google");
    const apppleElement =document.querySelector(".apple");
    const password = document.getElementById("password");
    const eyeIcon = document.getElementById("eye");
    const text = document.getElementById("text");
    const images = [
    { main: "img/theme1.png", },
    { main: "img/theme2.png", },
    { main: "img/theme3.png", },
    { main: "img/theme4.png", },
    { main: "img/theme5.png", }
];
    let index = 0;
    function showImage(i) {
        img.src = images[i].main;
        // btn.style.backgroundImage = `url(${images[i].btnBg})`;
    }
     showImage(index);

  setInterval(() => {
        index = (index + 1) % images.length;
        showImage(index);
    }, 3000);

  function updateOrText() {
    if (window.innerWidth <= 500) {
      orElement.textContent = "Or sign in with";
      emailElement.textContent = "Email";
      googleElement.innerHTML = '<img src="img/google.png" width="18" />Google';
      apppleElement.innerHTML = '<img src="img/facebook.png" width="18" />Facebook';
    } else {
      orElement.textContent = "Or";
      emailElement.textContent = "Email address";
      googleElement.innerHTML = '<img src="img/google.png" width="18" />Sign in with Google';
      apppleElement.innerHTML = '<img src="img/apple.png" width="18" /> Sign in with Apple';
    }
  }
  updateOrText();
  window.addEventListener("resize", updateOrText);
  
  eyeIcon.onclick = function() {
    if (password.type == "password") {
      password.type = "text";
      eyeIcon.textContent = "visibility";
    }else{
      password.type = "password";
      eyeIcon.textContent = "visibility_off";
    }
  };


});