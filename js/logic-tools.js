
const animals = [
    "Buddy", "Luna", "Max", "Oliver", "Charlie",
    "Milo", "Bella", "Lucy", "Daisy", "Rocky",
    "Lola", "Sophie", "Jack", "Toby", "Coco"
  ];
  

  function renderPets() {
    const petList = document.getElementById("petList");
    petList.innerHTML = "";
  
    let pets = JSON.parse(localStorage.getItem("pets")) || [];
  
    pets.forEach((pet, index) => {
      const li = document.createElement("li");
  
      const span = document.createElement("span");
      span.textContent = pet;
      li.appendChild(span);
  
      const editBtn = document.createElement("button");
      editBtn.textContent = "✏️";
      editBtn.className = "edit-btn";
      editBtn.style.marginLeft = "10px";
      editBtn.onclick = () => {
        const newName = prompt("Edit name:", pet);
        if (newName) {
          pets[index] = newName.trim();
          localStorage.setItem("pets", JSON.stringify(pets));
          renderPets();
        }
      };
      li.appendChild(editBtn);
  
      const delBtn = document.createElement("button");
      delBtn.textContent = "❌";
      delBtn.className = "delete-btn";
      delBtn.style.marginLeft = "5px";
      delBtn.onclick = () => {
        if (confirm(`Delete '${pet}'?`)) {
          pets.splice(index, 1);
          localStorage.setItem("pets", JSON.stringify(pets));
          renderPets();
        }
      };
      li.appendChild(delBtn);
  
      petList.appendChild(li);
    });
  }
  
  document.getElementById("addNewPetBtn").onclick = function () {
    const input = document.getElementById("newPetInput");
    let newPet = input.value.trim();
    if (newPet) {
      let pets = JSON.parse(localStorage.getItem("pets")) || [];
      pets.push(newPet);
      localStorage.setItem("pets", JSON.stringify(pets));
      input.value = "";
      renderPets();
    }
  };
  
  document.addEventListener("DOMContentLoaded", renderPets);
  
  
  document.getElementById("randomBtn").onclick = function () {
    const randIndex = Math.floor(Math.random() * animals.length);
    const animal = animals[randIndex];
    document.getElementById("randomResult").textContent = `Random Animal: ${animal}`;
  };
  
  document.getElementById("compareBtn").onclick = function () {
    const dogHumanAge = parseFloat(document.getElementById("dogAge").value);
    const catHumanAge = parseFloat(document.getElementById("catAge").value);
    let msg = "";
  
    if (!isNaN(dogHumanAge)) {
      let dogAge = dogHumanAge * 7;
      msg += `Dog Age in dog years: ${dogAge.toFixed(1)}. `;
    }
    if (!isNaN(catHumanAge)) {
      let catAge = catHumanAge * 6;
      msg += `Cat Age in cat years: ${catAge.toFixed(1)}.`;
    }
    document.getElementById("compareResult").textContent = msg || "Please enter valid ages.";
  };
  
  
  document.addEventListener("DOMContentLoaded", function () {
    renderPets();
  });
  