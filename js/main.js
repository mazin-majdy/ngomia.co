let button = document.getElementById("barIcon");
let nav = document.querySelector(".header ul");

button.onclick = function () {
  nav.classList.toggle("active")
}

// Start Ngomia
let ngomiaSection = document.querySelector(".ngomia");
let paragraphText = document.querySelector(".ngomia .content p").dataset.text;
let landingParagraph = document.getElementById("paragraph");
let howUsSection = document.querySelector(".howUs");
let started = false;
let started2 = false;



let nums = document.querySelectorAll(".howUs2 .text h1");


let i = 0;
let write = function () {
  let fun = setInterval(() => {

    landingParagraph.textContent += paragraphText[i];
    i++;
    if (i == paragraphText.length) {
      clearInterval(fun);
      i = paragraphText.length;
    }
  }, 30);

}
window.onscroll = function () {
  if (window.scrollY > ngomiaSection.offsetTop - 500) {
    if (!started) {
      write();
    }
    started = true;
  }

  if (window.scrollY >= howUsSection.offsetTop - 100) {
    if (!started2) {
      nums.forEach((number) => startCount(number));
    }
    started2 = true;
  }

  
    let clientsSection = document.querySelector(".clients ");
    if (window.scrollY >= clientsSection.offsetTop - 400) {
      clientsSection.classList.add("active");
    }


}

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}


let headerText = document.querySelector(".landing .content h1").dataset.text;
let header = document.getElementById("header");
let spanText = document.querySelector(".landing .content span").dataset.text;
let span = document.getElementById("span");
let x = 0;
let y = 0;
let writeSpan = function () {
  let fun2 = setInterval(() => {

    span.textContent += spanText[x];
    x++;
    if (x == spanText.length) {
      clearInterval(fun2);
      x = spanText.length;
    }
  }, 50);

}

let writeHeader = function () {
  let fun3 = setInterval(() => {

    header.innerHTML += headerText[y];
    y++;
    if (y == headerText.length) {
      clearInterval(fun3);
      y = headerText.length;
    }
  }, 50);

}

  writeSpan();
  setTimeout(writeHeader, 1700);

//****************************************************** */
