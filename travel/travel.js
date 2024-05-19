window.addEventListener("load", () => init());
function init() {
  initModalHandler();
  initSlider();
  getSomeData();
  initLoginModalHandler();
}

function initModalHandler() {
  const burger = document.querySelector("#burger");
  const modal = document.querySelector("#modal");

  function toggleModal() {
    modal.classList.toggle("hide");
  }

  burger.addEventListener("click", () => toggleModal());
  modal.addEventListener("click", (event) => handleModalClick(event));
}

function initSlider() {}

function getSomeData() {
  const btns = document.querySelectorAll("button");
}

let offSet = 0;
let activeSlide = 0;
const slides = document.querySelector(".slides");
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");
const circles = document.querySelector(".points");
nextButton.addEventListener("click", moveSlideRight);
prevButton.addEventListener("click", moveSlideLeft);

function moveSlideRight() {
  offSet = offSet - 360;
  if (offSet < -720) {
    offSet = 0;
  }
  slides.style.left = offSet + "px";
  changeActiveSlide(1);
}

function moveSlideLeft() {
  offSet = offSet + 360;
  if (offSet > 0) {
    offSet = -720;
  }
  slides.style.left = offSet + "px";
  changeActiveSlide(-1);
}

function changeActiveSlide(num) {
  activeSlide += num;

  if (activeSlide === 0) {
    prevButton.setAttribute("disabled", true);
  } else {
    prevButton.removeAttribute("disabled");
  }

  if (activeSlide === 2) {
    nextButton.setAttribute("disabled", true);
  } else {
    nextButton.removeAttribute("disabled");
  }
}

function initLoginModalHandler() {
  const logIn = document.querySelector(".login-btn");
  const loginModalWrapper = document.querySelector(".login-modal-wrapper");
  const loginModal = document.querySelector(".login-modal");
  const ssilka = document.getElementById("ssilka");
  const createDivWrapper = document.querySelector(".create-div-wrapper");
  const createDiv = document.querySelector(".create-div");
  const ssilkaTwo = document.getElementById("ssilka-two");

  ssilka.addEventListener("click", showCreateDiv);
  function showCreateDiv(event) {
    event.preventDefault();
    loginModalWrapper.classList.remove("show");
    createDivWrapper.classList.add("show");
  }

  ssilkaTwo.addEventListener("click", hideCreateDivAndShowLoginModal);
  function hideCreateDivAndShowLoginModal(event) {
    event.preventDefault();

    createDivWrapper.classList.remove("show");

    showLoginModal();
  }
  // function showCreateDiv(event) {
  //   event.preventDefault();
  //   createDiv.classList.add("show");
  //   createDiv.classList.remove("show");
  // }

  function showLoginModal() {
    loginModalWrapper.classList.add("show");
  }

  function hideLoginModal(event) {
    if (!event.target.closest(".login-modal")) {
      loginModalWrapper.classList.remove("show");
    }
  }

  function handleLoginModalClick(event) {
    if (event.target.closest("button")) {
      event.preventDefault();
      loginModalWrapper.classList.remove("show");
    }
  }

  loginModalWrapper.addEventListener("click", (event) => hideLoginModal(event));
  logIn.addEventListener("click", () => showLoginModal());
  loginModal.addEventListener("click", (event) => handleLoginModalClick(event));
}
