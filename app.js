function sitebar() {
  localStorage.setItem("bar", "none");

  let bar = document.getElementById("bar");
  let sitebar = document.getElementById("sitebar");

  bar.addEventListener("click", () => {
    let localbar = localStorage.getItem("bar");
    if (localbar == "none") {
      sitebar.style.width = "300px";
      sitebar.style.left = "0";
      document
        .getElementsByClassName("fa-bars")[0]
        .classList.replace("fa-bars", "fa-xmark");
      localStorage.setItem("bar", "flex");
    }
    if (localbar == "flex") {
      sitebar.style.width = "0";
      sitebar.style.left = "-40px";
      localStorage.setItem("bar", "none");
      document
        .getElementsByClassName("fa-xmark")[0]
        .classList.replace("fa-xmark", "fa-bars");
    }
  });
}
sitebar();

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

function accordition() {
  let general = document.getElementById("general");
  let support = document.getElementById("support");
  let hosting = document.getElementById("hosting");
  let product = document.getElementById("product");
  let select = document.getElementById("selectMobile");
  let selectTxt = document.getElementById("selectTxt")
  let generalM = document.getElementById("generalM");
  let supportM = document.getElementById("supportM");
  let hostingM = document.getElementById("hostingM");
  let productM = document.getElementById("productM");
  let accor1 = document.getElementById("accor_txt1");
  let accor2 = document.getElementById("accor_txt2");
  let accor3 = document.getElementById("accor_txt3");
  let accor4 = document.getElementById("accor_txt4");

  general.addEventListener("click", () => {
    general.className =
      "rounded-3xl bg-c_dark text-c_white px-4 py-1 cursor-pointer duration-200";
    support.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    hosting.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    product.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    accor1.textContent = "01";
    accor2.textContent = "02";
    accor3.textContent = "03";
    accor4.textContent = "04";
  });
  support.addEventListener("click", () => {
    general.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    support.className =
      "rounded-3xl bg-c_dark text-c_white px-4 py-1 cursor-pointer duration-200";
    hosting.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    product.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    accor1.textContent = "05";
    accor2.textContent = "06";
    accor3.textContent = "07";
    accor4.textContent = "08";
  });
  hosting.addEventListener("click", () => {
    general.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    support.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    hosting.className =
      "rounded-3xl bg-c_dark text-c_white px-4 py-1 cursor-pointer duration-200";
    product.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    accor1.textContent = "09";
    accor2.textContent = "10";
    accor3.textContent = "11";
    accor4.textContent = "12";
  });
  product.addEventListener("click", () => {
    general.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    support.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    hosting.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    product.className =
      "rounded-3xl bg-c_dark text-c_white px-4 py-1 cursor-pointer duration-200";
    accor1.textContent = "13";
    accor2.textContent = "14";
    accor3.textContent = "15";
    accor4.textContent = "16";
  });

  select.addEventListener(("click"), () => {
    document.getElementById("options").classList.replace("hidden", "flex")
  })
  generalM.addEventListener("click", () => {
    document.getElementById("options").classList.replace("flex", "hidden")
    selectTxt.textContent = "General"
    generalM.className =
      "rounded-3xl bg-c_dark text-c_white px-4 py-1 cursor-pointer duration-200";
    supportM.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    hostingM.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    productM.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    accor1.textContent = "01";
    accor2.textContent = "02";
    accor3.textContent = "03";
    accor4.textContent = "04";
  });
  supportM.addEventListener("click", () => {
    document.getElementById("options").classList.replace("flex", "hidden")
    selectTxt.textContent = "Support"
    generalM.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    supportM.className =
      "rounded-3xl bg-c_dark text-c_white px-4 py-1 cursor-pointer duration-200";
    hostingM.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    productM.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    accor1.textContent = "05";
    accor2.textContent = "06";
    accor3.textContent = "07";
    accor4.textContent = "08";
  });
  hostingM.addEventListener("click", () => {
    document.getElementById("options").classList.replace("flex", "hidden")
    selectTxt.textContent = "Hosting"
    generalM.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    supportM.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    hostingM.className =
      "rounded-3xl bg-c_dark text-c_white px-4 py-1 cursor-pointer duration-200";
    productM.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    accor1.textContent = "09";
    accor2.textContent = "10";
    accor3.textContent = "11";
    accor4.textContent = "12";
  });
  productM.addEventListener("click", () => {
    selectTxt.textContent = "Product"
    document.getElementById("options").classList.replace("flex", "hidden")
    generalM.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    supportM.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    hostingM.className = "rounded-3xl px-4 py-1 cursor-pointer duration-200";
    productM.className =
      "rounded-3xl bg-c_dark text-c_white px-4 py-1 cursor-pointer duration-200";
    accor1.textContent = "13";
    accor2.textContent = "14";
    accor3.textContent = "15";
    accor4.textContent = "16";
  });
}

accordition();

function sum(sum) {
  document.getElementById(sum).classList.toggle("rotate-180");
  document.getElementById(sum).style.transition = "300ms";
}

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainers = document.querySelectorAll(".js-scrollable");
  const scrollLeftButtons = document.querySelectorAll(".scroll-left");
  const scrollRightButtons = document.querySelectorAll(".scroll-right");
  const animatedElements = document.querySelectorAll(".js-animate");

  // Scroll Control Logic
  scrollLeftButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      scrollContainers[index].scrollBy({
        left: -300, // Adjust scroll amount as needed
        behavior: "smooth",
      });
    });
  });

  scrollRightButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      scrollContainers[index].scrollBy({
        left: 300, // Adjust scroll amount as needed
        behavior: "smooth",
      });
    });
  });

  // Intersection Observer for Scroll Animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideUp");
          observer.unobserve(entry.target); // Stop observing after animation triggers
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});
