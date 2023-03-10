/*//////==== Functionality @mediaQueries SmallScreens ====////////*/
const burgerIcon = document.getElementById("burgerIcon");
const sideBar = document.getElementById("sidebar");
const closeSideNav = document.getElementById("sidebar__close");
const main = document.getElementById("main");
const sidebarLinks = document.querySelectorAll(".sidenavbar__list--link");

burgerIcon.addEventListener("click", function (e) {
  e.preventDefault();
  sideBar.classList.remove("removeSideBar");
  sideBar.classList.add("showSideBar");
  main.style.display = "none";
});

closeSideNav.addEventListener("click", function (e) {
  e.preventDefault();
  sideBar.classList.remove("showSideBar");
  sideBar.classList.add("removeSideBar");
  main.style.display = "block";
});

sidebarLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    sideBar.classList.remove("showSideBar");
    sideBar.classList.add("removeSideBar");
    main.style.display = "block";
    let sectionId = e.target.getAttribute("href");
    let section = document.querySelector(sectionId);
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

const logo = document.querySelector("#logo");
const homePage = document.querySelector(".home");

logo.addEventListener("click", function () {
  homePage.scrollIntoView({
    behavior: "smooth",
  });
});

/*///////===== Functionality for Scroll Animation=====///////////*/
const pageScroller = (navLinks) => {
  const navbarLinks = document.querySelectorAll(navLinks);
  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let linkId = e.target.getAttribute("href");
      const section = document.querySelector(`${linkId}`);
      if (!section) return;
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};
pageScroller(".navbar__list--link");
pageScroller(".footer__navbar--link");

/*///////===== Functionality for all serviceses buttons=====///////////*/
const servicesButtons = document.querySelectorAll(".services__panel--button");

servicesButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const parentElement = e.target.id;
    document.getElementById(parentElement).classList.toggle("showHeight");

    if (
      document.getElementById(parentElement).classList.contains("showHeight")
    ) {
      e.target.innerHTML = "See Less";
    } else {
      e.target.innerHTML = "See More";
    }
  });
});

/*///////===== Functionality for Slider=====///////////*/
const slider = function () {
  const button__left = document.querySelector(".slider__buttons--left");
  const button__right = document.querySelector(".slider__buttons--right");
  const slides = document.querySelectorAll(".slider__slide");
  let currentSlide = 0;
  const maxSlide = slides.length - 1;
  const dotsContainer = document.querySelector(".slider__dots ");

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="slider__dots--dot" data-slide="${i}"></div>`
      );
    });
  };

  const activeDots = function (slide) {
    document.querySelectorAll(".slider__dots--dot").forEach(function (dot) {
      dot.classList.remove("dot__active");
    });

    document
      .querySelector(`.slider__dots--dot[data-slide="${slide}"]`)
      .classList.add("dot__active");
  };

  const goToSlide = function (slidei) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - slidei)}%)`;
    });
  };

  //Next Slide
  const nextSlide = () => {
    if (currentSlide < maxSlide) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    goToSlide(currentSlide);
    activeDots(currentSlide);
  };

  //Previous Slide
  const prevSlide = () => {
    if (currentSlide == 0) {
      currentSlide = maxSlide;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activeDots(currentSlide);
  };
  const init = function () {
    goToSlide(0);
    createDots();
    activeDots(0);
  };
  init();

  button__right.addEventListener("click", nextSlide);
  button__left.addEventListener("click", prevSlide);
  const myInterval = setInterval(nextSlide, 3000);

  document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
      nextSlide();
    }
    if (e.key == "ArrowLeft") {
      prevSlide();
    }
  });

  dotsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("slider__dots--dot")) {
      const slide = e.target.dataset.slide;

      goToSlide(slide);
      activeDots(slide);
    }
  });

  ////////Slide buttons functionality

  const bookServiceBtn = document.querySelectorAll(".slider__details--button");
  const sliderModal = document.querySelector(".slider__modal");
  let serviceInput = document.getElementById("service");
  let inputs = document.querySelectorAll(".slider__modal--input");
  let modalForm = document.querySelector(".slider__modal");
  const removeModal = document.querySelector(".remove__icon");

  bookServiceBtn.forEach((button) => {
    button.addEventListener("click", function (e) {
      const title = e.target.dataset;
      sliderModal.classList.toggle("showModal");
      serviceInput.value = `${title.title}`;
      clearInterval(myInterval);
    });
  });

  removeModal.addEventListener("click", function () {
    sliderModal.classList.remove("showModal");
  });
  /**/ ///////////// Footer inputs clearing *//////////
  const footerInputs = document.querySelectorAll(".contacts__form--input");

  setTimeout(() => {
    footerInputs.forEach((input) => {
      input.value = " ";
    });
  }, 2500);
};
slider();

/**/ //////////////////// FormSpree functionality *//////////////

window.formbutton =
  window.formbutton ||
  function () {
    (formbutton.q = formbutton.q || []).push(arguments);
  };
/* customize formbutton below*/
formbutton("create", {
  action: "https://formspree.io/f/mvonrenw",
  title: "How can we help?",
  fields: [
    {
      type: "text",
      label: "Company Name",
      name: "name",
      required: true,
      placeholder: "company name",
    },
    {
      type: "number",
      label: "Phone number",
      name: "phone",
      required: true,
      placeholder: "company number",
    },
    {
      type: "email",
      label: "Email:",
      name: "email",
      required: true,
      placeholder: "your@email.com",
    },
    {
      type: "type",
      label: "Service Choosen:",
      name: "service",
      required: true,
      placeholder: "your@email.com",
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "What's on your mind?",
    },
    { type: "submit" },
  ],
  styles: {
    title: {
      backgroundColor: "#ffc000ff",
    },
    button: {
      backgroundColor: "#ffc000ff",
    },
  },
});
/**/ /////////////////// Leaflet Map ///////////*/

let map = L.map("map").setView([-29.72333, 30.98271], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
let maker = L.marker([-29.72333, 30.98271]).addTo(map);
