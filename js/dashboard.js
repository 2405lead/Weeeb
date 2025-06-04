document.addEventListener("DOMContentLoaded", function () {
    const role = localStorage.getItem("userRole");
    const path = window.location.pathname;
  
    if (path.includes("admin-dashboard") && role !== "admin") {
      alert("Access denied: Admins only");
      window.location.href = "login.html";
    }
  
    if (path.includes("user-dashboard") && role !== "user") {
      alert("Access denied: Users only");
      window.location.href = "login.html";
    }
  });
  