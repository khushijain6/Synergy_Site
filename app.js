const dropmenu = document.querySelector(".dropmenu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

dropmenu.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Dropmenu Animation
    dropmenu.classList.toggle("toggle");
});

// flip image

const image = document.querySelector('.slider img');
let isTrue = false;
function flipImage() {
    if(isTrue){
        image.setAttribute('src','https://source.unsplash.com/1210x500/?bandminton,swimming')
    }
    else{
        image.setAttribute('src','https://source.unsplash.com/1210x500/?aethletic,basketball')
    }
    isTrue=!isTrue;
}

setInterval(flipImage,2000);