//Login & SignUp Script

var log = document.getElementById("login");
var yog = document.getElementById("register");
var zog = document.getElementById("btn-form");

function register() {
    log.style.left = "-370px";
    yog.style.left = "20px";
    zog.style.left = "110px";
}

function login() {
    log.style.left = "20px";
    yog.style.left = "450px";
    zog.style.left = "0px";
}

//modal Javscript

document.getElementById('login-button').addEventListener('click', 
  function(){
    document.querySelector('.modal-box').style.display = 'flex';
  });

  document.querySelectorAll('.close.close-box').forEach(function(element) {
    element.addEventListener('click', function() {
        document.querySelector('.modal-box').style.display = 'none';
    });
});
