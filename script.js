var sections = document.querySelectorAll(".section_faq_dropdown_container");
sections.forEach(function(section) {
  var button = section.querySelector(".section_faq_dropdown_button");
  var content = section.querySelector(".section_faq_dropdown_collapsible_container");
  var icon1 = section.querySelector(".section_faq_dropdown_icon");
  var icon2 = section.querySelector(".section_faq_dropdown_collapsible_icon");

  button.addEventListener("click", function() {
    section.classList.toggle("active");
    content.style.display = (content.style.display === "block") ? "none" : "block";
    icon1.style.display = (content.style.display === "block") ? "none" : "block";
    icon2.style.display = (content.style.display === "block") ? "block" : "none";
  });
});

const title = document.getElementById("section_ourservices_title_h3");
const description = document.getElementById('service-description');
container1 = document.getElementById("section_ourservices_container_1");
container2 = document.getElementById("section_ourservices_container_2");
container3 = document.getElementById("section_ourservices_container_3");
container4 = document.getElementById("section_ourservices_container_4");

document.getElementById('section_ourservices_button1').onclick = function() {
    title.textContent = "E-Commerce"
    description.textContent = "E-Commerce";
    container1.style.backgroundColor = "rgb(56, 27, 117)";
    container2.style.backgroundColor = "black";
    container3.style.backgroundColor = "black";
    container4.style.backgroundColor = "black";
};

document.getElementById('section_ourservices_button2').onclick = function() {
  title.textContent = "Agencies"
  description.textContent = "Agencies";
  container1.style.backgroundColor = "black";
  container2.style.backgroundColor = "rgb(56, 27, 117)";
  container3.style.backgroundColor = "black";
  container4.style.backgroundColor = "black";
};

document.getElementById('section_ourservices_button3').onclick = function() {
  title.textContent = "Real Estate"
  description.textContent = "Real Estate";
  container1.style.backgroundColor = "black";
  container2.style.backgroundColor = "black";
  container3.style.backgroundColor = "rgb(56, 27, 117)";
  container4.style.backgroundColor = "black";
};

document.getElementById('section_ourservices_button4').onclick = function() {
  title.textContent = "Consultants"
  description.textContent = "Consultants";
  container1.style.backgroundColor = "black";
  container2.style.backgroundColor = "black";
  container3.style.backgroundColor = "black";
  container4.style.backgroundColor = "rgb(56, 27, 117)";
};
