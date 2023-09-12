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

const title = document.getElementById("section_ourservices_title_h3")
const description = document.getElementById('service-description');

document.getElementById('section_ourservices_button1').onclick = function() {
    title.textContent = "E-Commerce"
    description.textContent = "E-Commerce";
};

document.getElementById('section_ourservices_button2').onclick = function() {
  title.textContent = "Agencies"
  description.textContent = "Agencies";
};

document.getElementById('section_ourservices_button3').onclick = function() {
  title.textContent = "Real Estate"
  description.textContent = "Real Estate";
};

document.getElementById('section_ourservices_button4').onclick = function() {
  title.textContent = "Consultants"
  description.textContent = "Consultants";
};
