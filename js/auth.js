function loginAs(role) {
  localStorage.setItem("userRole", role);
  alert("Logged in as: " + role);
  if (role === "admin") {
    window.location.href = "admin-dashboard.html";
  } else {
    window.location.href = "user-dashboard.html";
  }
}

function logout() {
  localStorage.removeItem("userRole");
  alert("Logged out.");
  window.location.href = "login.html";
}

(function () {
  const role = localStorage.getItem("userRole");
  const page = window.location.pathname;

  if (page.includes("admin-dashboard") && role !== "admin") {
    alert("Access denied: Admins only");
    window.location.href = "login.html";
  }

  if (page.includes("user-dashboard") && role !== "user") {
    alert("Access denied: Users only");
    window.location.href = "login.html";
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  const loginStatus = document.getElementById("loginStatus");
  if (loginStatus) {
    const role = localStorage.getItem("userRole");
    if (role) loginStatus.textContent = "Logged in as: " + role;
  }
});
