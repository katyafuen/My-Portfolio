document.addEventListener("DOMContentLoaded", function () {
  // Get the current URL path and normalize it
  let currentLocation = window.location.pathname.replace(/\/$/, ""); // Remove trailing slash if any

  // Select all navigation links
  let navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    // Get the link's href and normalize it
    let linkPath = link.getAttribute("href").replace(/\/$/, "");

    // Match the path, ignoring any trailing slash
    if (currentLocation.endsWith(linkPath)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
