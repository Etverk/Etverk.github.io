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