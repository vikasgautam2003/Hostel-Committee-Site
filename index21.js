//Smooth Scrolling Function
const links = document.querySelectorAll(".navbar li a");

for (const link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href");
  window.scrollTo({
    top: document.querySelector(targetId).offsetTop,
    behavior: "smooth",
  });
}

//Typing Animation
let animationPaused = false;

function typeWriter(text, element, delay = 100) {
    let i = 0;
    let startTimestamp;

    function animate(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;

        const progress = timestamp - startTimestamp;

        if (!document.hidden && !animationPaused) {
            element.innerHTML = text.substring(0, Math.floor(progress / delay));

            if (progress < delay * text.length) {
                requestAnimationFrame(animate);
            }
        }
    }

    requestAnimationFrame(animate);
}

function eraseText(element, delay = 100) {
    const text = element.innerHTML;
    let i = text.length;
    let startTimestamp;

    function animate(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;

        const progress = timestamp - startTimestamp;

        if (!document.hidden && !animationPaused) {
            element.innerHTML = text.substring(0, i - Math.floor(progress / delay));

            if (progress < delay * text.length) {
                requestAnimationFrame(animate);
            }
        }
    }

    requestAnimationFrame(animate);
}

const typingElement = document.getElementById('typing-text');

function startTypingLoop() {
    typeWriter('Aryabhatta Hostel,', typingElement);
    setTimeout(() => {
        eraseText(typingElement);
        setTimeout(() => {
            typeWriter('Bose Hostel,', typingElement);
            setTimeout(startTypingLoop, 4000); // Delay before starting the next loop iteration
        }, 2000); // Delay before typing the next text
    }, 3000); // Delay before erasing the first text
}

function pauseAnimation() {
    animationPaused = true;
}

function resumeAnimation() {
    animationPaused = false;
    startTypingLoop();
}

// Ensure that the typing effect pauses when the page is not visible
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // Page is not visible
        pauseAnimation();
    } else {
        // Page is visible
        resumeAnimation();
    }
});

// Start the typing loop initially
startTypingLoop();


//Gallery Filter Code

const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image6");

window.onload = () => { //once window loaded
    filterItem.onclick =(selectedItem) => {//when user clicks on filterImg div
          if(selectedItem.target.classList.contains("item")){//if user click element has item class
            filterItem.querySelector(".active").classList.remove("active");
            //remove the active class which is in first item
            selectedItem.target.classList.add("active");//add that active class on the user selected item
            let filterName = selectedItem.target.getAttribute("data-name");//getting data-name value of the user selected item and storing in a filtername variable
            filterImg.forEach((image) => {
                 let filterImages = image.getAttribute("data-name");//getting image data-name value
                 //if user selected item data-name value is equal to images data-name value
                 //or user selected item data-name value is equal to "all"
                 if(filterImages == filterName || filterName == "all"){
                    image.classList.remove("hide");
                     image.classList.add("show");
                 }
                 else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                 }
            });
          }
          

    }

}

//Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //Faq Dropdown Code

  const  questions = document.querySelectorAll('.question-answer');

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove('mow-text');
            }
        });
        question.classList.toggle('mow-text');
    });
})