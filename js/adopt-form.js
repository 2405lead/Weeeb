document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("adoptionFormModal");
    const closeModal = document.getElementById("closeModal");
    const petNameField = document.getElementById("petNameField");
    const form = document.getElementById("adoptionForm");
  

    document.querySelectorAll(".adopt-btn").forEach(button => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const petName = this.getAttribute("data-pet");
        petNameField.value = petName;
        modal.classList.remove("hidden");
      });
    });
  

    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  

    document.getElementById("sidebarOverlay").addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(form);
      const applications = JSON.parse(localStorage.getItem("adoptionApplications") || "[]");
      applications.push(Object.fromEntries(formData.entries()));
      localStorage.setItem("adoptionApplications", JSON.stringify(applications));
      alert("Заявка отправлена! Админ скоро свяжется с вами.");
      form.reset();
      modal.classList.add("hidden");
    });
  });
  