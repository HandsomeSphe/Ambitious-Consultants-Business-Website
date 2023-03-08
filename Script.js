/*//////==== Functionality @mediaQueries SmallScreens ====////////*/
const burgerIcon = document.getElementById("burgerIcon");
const sideBar = document.getElementById("sidebar");
const closeSideNav = document.getElementById("sidebar__close");
const main = document.getElementById("main");

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
const button__left = document.querySelector(".slider__buttons--left");
const button__right = document.querySelector(".slider__buttons--right");
const slides = document.querySelectorAll(".slider__slide");
let currentSlide = 0;
const maxSlide = slides.length - 1;

const goToSlide = function (slidei) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - slidei)}%)`;
  });
};

goToSlide(0);

//Next Slide
const nextSlide = () => {
  if (currentSlide < maxSlide) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  goToSlide(currentSlide);
};

//Previous Slide
const prevSlide = () => {
  if (currentSlide == 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

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

// const clearInputFields = (inputsArr) => {
//   inputsArr.forEach((input) => {
//     input.value = "";
//   });
// };

// modalForm.addEventListener("submit", function (e) {
//   inputs.forEach((input, i) => {
//     user.name = inputs[0].value;
//     user.lastName = inputs[1].value;
//     user.email = inputs[2].value;
//     user.service = inputs[3].value;
//     user.phone = inputs[4].value;
//   });
//   setTimeout(() => {
//     sliderModal.classList.toggle("showModal");
//   }, 999);
//   clearInputFields(inputs);
// });