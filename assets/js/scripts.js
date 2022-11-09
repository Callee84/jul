
/**
 * script for typewriting
 */

 let i = 0;
 let text = "Välkomna till Julen 2022" + "\n " + "på Förlig Vinds Gränd";
 let speed = 120;
 
 function type() {
     if (i < text.length) {
         document.getElementById("ready").innerHTML += text.charAt(i);
         i++;
         setTimeout(type, speed);
     }
 }
 
 window.addEventListener("load", type)

/**
 * script for the countdown
 */

 const countdown = () => {
    const countDate = new Date ("December 22, 2022 23:59:59").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // counting time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculate day
    const showDay = Math.floor(gap / day);
    const showHour = Math.floor ((gap % day) / hour)
    const showMin = Math.floor ((gap % hour) / minute)
    const showSec = Math.floor ((gap % minute) / second)

    document.querySelector(".day").innerText = showDay;
    document.querySelector(".hour").innerText = showHour;
    document.querySelector(".min").innerText = showMin;
    document.querySelector(".secs").innerText = showSec;
};

setInterval(countdown, 1000)

/** Hamburger menu */
const menuHamburger = document.querySelector('.toggle');

menuHamburger.addEventListener('click', () => {
    menuHamburger.classlist.hamburger('active')
});
