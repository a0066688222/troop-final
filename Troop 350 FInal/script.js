function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    if (!section.classList.contains("fade-in")) {
      section.classList.remove("fade-away");
      section.classList.add("fade-in");
    } else {
      section.classList.remove("fade-in");
      section.classList.add("fade-away");
      setTimeout(function() {
        section.classList.remove("fade-away");
      }, 500);
    }
  }
}



const imageButton = document.getElementById("show/hide");
const locationImage = document.getElementById("location-image");

if (imageButton && locationImage) {
  imageButton.addEventListener("click", function () {
    if (locationImage.style.display === "none") {
      locationImage.style.display = "block";
    } else {
      locationImage.style.display = "none";
    }
  });
}

const darkModeButton = document.getElementById("black");

if (darkModeButton) {
  darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("black");
    if (document.body.classList.contains("black")) {
      darkModeButton.textContent = "Make the background white";
    } else {
      darkModeButton.textContent = "Make the background black";
    }
  });
}
