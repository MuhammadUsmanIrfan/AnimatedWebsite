function loading() {
  let tl = gsap.timeline();
  tl.to("#loader #yellow1", {
    top: "-100%",
    duration: 0.5,
    ease: "power4.out",
  });
  tl.from(
    "#loader #yellow2",
    {
      delay: 0.4,
      top: "100%",
      duration: 0.5,
      ease: "power4.out",
    },
    "anim" //Here Anim is the animation name
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.3,
      duration: 0.5,
      color: "black",
    },
    "anim"
  );
  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
}

loading();
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

menuBtn,
  addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });

let elms = document.querySelectorAll(".elem");
let page2 = document.querySelector("#page2");
elms.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    let bgimg = e.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgimg})`;
  });
});
