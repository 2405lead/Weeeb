document.addEventListener("DOMContentLoaded", function () {
  window.onload = function () {
    alert("Page loaded successfully!");
  };

  document.getElementById("alertBtn").onclick = function () {
    alert("You clicked the alert button!");
  };

  document.getElementById("randomBtn").addEventListener("click", function () {
    let rand = Math.floor(Math.random() * 100) + 1;
    let msg = rand % 2 === 0 ? "Even" : "Odd";
    msg += rand > 50 ? " and greater than 50" : " and ≤ 50";
    document.getElementById("randomDisplay").innerText = `Number: ${rand} — ${msg}`;
  });

  let petName = "Pupsik";
  let petAge = 3;
  let isAdopted = false;

  let years = 2;
  let totalAge = petAge + years;
  let remainder = totalAge % 2;

  petAge++;
  years--;

  function greet(name) {
    console.log("Hello, " + name + "!");
  }

  greet(petName);

  function multiply(a, b) {
    return a * b;
  }
  console.log(multiply(3, 4));

  let pets = ["Dog", "Cat", "Rabbit"];
  const petList = document.getElementById("petList");

  function renderPets() {
    petList.innerHTML = "";
    for (let i = 0; i < pets.length; i++) {
      let li = document.createElement("li");
      li.textContent = pets[i];
      petList.appendChild(li);
    }
  }

  renderPets();

  document.getElementById("addPetBtn").onclick = function () {
    pets.push("Hamster");
    renderPets();
  };

  function simulateServerResponse(callback) {
    console.log("Loading data...");
    setTimeout(() => {
      let data = "🐾 List of pets loaded.";
      callback(data);
    }, 1000);
  }

  simulateServerResponse(function (response) {
    alert(response);
  });

  const title = document.getElementById("mainTitle");
  title.style.color = "#4b2e83";
  title.style.textAlign = "center";

  const firstCard = document.getElementsByClassName("pet-card")[0];
  if (firstCard) firstCard.style.border = "2px dashed #ffcc70";

  const btn = document.querySelector(".btn");
  if (btn) btn.style.backgroundColor = "#f5b041";

  if (title) {
    title.textContent = "Welcome to Pawfect 🐶🐱";
  }

  

  const firstLink = document.querySelector("a");
  if (firstLink) firstLink.setAttribute("href", "https://astanait.edu.kz");

  const revealBtn = document.getElementById("revealBtn");
  const changeImgBtn = document.getElementById("changeImgBtn");

  if (revealBtn) {
    revealBtn.addEventListener("click", () => {
      alert("You clicked reveal!");
      handleInteraction(() => alert("Handled with a higher-order function!"));
    });
  }

  if (changeImgBtn) {
    changeImgBtn.addEventListener("dblclick", () => {
      if (image) image.src = "images/cat2.jpg";
    });
  }

  function handleInteraction(callback) {
    callback();
  }

  const meow = document.getElementById("meowSound");

  if (changeImgBtn) {
    changeImgBtn.addEventListener("click", () => {
      if (meow) meow.play();
    });
  }

  

  const petNameEl = document.querySelector(".pet-name");
  if (petNameEl) {
    petNameEl.textContent = pet.name;
  }
});

const pet = {
  name: "Luna",
  age: 2,
  updateName: function (newName) {
    this.name = newName;
  }
};

pet.updateName("Milo");


const petNameEl = document.querySelector(".pet-name");
const petAgeEl = document.querySelector(".pet-age");


if (petNameEl) {
  petNameEl.textContent = pet.name;
}
if (petAgeEl) {
  petAgeEl.textContent = `Age: ${pet.age}`;
}
