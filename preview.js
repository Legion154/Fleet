function mode() {
  let mode = document.getElementById("mode");
  let modeDesk = document.getElementById("modeDesk");

  let theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "light");
  }
  if (theme === "dark") {
    modeDesk.classList.replace("fa-sun", "fa-moon");
    document.body.classList.add("dark");
  }

  mode.addEventListener("click", () => {
    let theme = localStorage.getItem("theme");
    if (theme === "light") {
      modeDesk.classList.replace("fa-sun", "fa-moon");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    if (theme === "dark") {
      modeDesk.classList.replace("fa-moon", "fa-sun");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
}

mode();

function modeDesk() {
  let modeDesk = document.getElementById("modeDesk");

  let theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "light");
  }
  if (theme === "dark") {
    document.body.classList.add("dark");
    modeDesk.classList.replace("fa-sun", "fa-moon");
  }

  modeDesk.addEventListener("click", () => {
    let theme = localStorage.getItem("theme");
    if (theme === "light") {
      modeDesk.classList.replace("fa-sun", "fa-moon");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    if (theme === "dark") {
      modeDesk.classList.replace("fa-moon", "fa-sun");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
}

modeDesk();

let loader = document.getElementById("loader");
let main = document.getElementById("main");

document.addEventListener("DOMContentLoaded", () => {
  main.className = "hidden";
  loader.className = "flex";
  setTimeout(() => {
    main.className = "flex";
    loader.className = "hidden";
  }, 2000);
});

let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let modal = document.getElementById("alert");
let warning = document.getElementById("warning");
let trueEmail = "avatar@gmail.com";
let truePassword = "12345";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === trueEmail && password.value === truePassword) {
    loader.className = "flex";
    setTimeout(() => {
      loader.className = "hidden";
      window.location.href = "home.html";
    }, 1000);
  }
  if (email.value !== trueEmail && password.value !== truePassword) {
    loader.className = "flex";
    setTimeout(() => {
      loader.className = "hidden";
      modal.style.top = "15px";
      warning.textContent = "Username or password is incorrect!";
    }, 1000);
  }
  if (!email.value && !password.value) {
    loader.className = "flex";
    setTimeout(() => {
      loader.className = "hidden";
      modal.style.top = "15px";
      warning.textContent = "Username or password is not filled";
    }, 1000);
  }
});