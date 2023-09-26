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
    title.textContent = "Smidig integration"
    description.innerHTML = "Vår AI-chattbot för kundtjänst integreras sömlöst med er befintliga e-handelsplattform, vilket gör implementeringen mycket enkel. <br><br>Säg adjö till komplexa installationsprocesser och långa utvecklingstider. Med vår chattbot kan du få igång en kraftfull kundtjänstlösning på nolltid. <br><br>Dessutom är våra integrationsfunktioner utformade för att fungera harmoniskt med populära e-handelsplattformar, vilket garanterar en problemfri upplevelse för både dig och dina kunder.";
    container1.style.backgroundColor = "rgb(56, 27, 117)";
    container2.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
    container3.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
    container4.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
};

document.getElementById('section_ourservices_button2').onclick = function() {
  title.textContent = "Branding"
  description.innerHTML = "Det finns inte en lösning som passar alla, och det förstår vi. Det är därför vår chattbot för kundtjänst erbjuder oöverträffade anpassningsalternativ. <br><br>Skräddarsy dess utseende, personlighet och ton för att matcha din e-handelsbutiks unika identitet. Oavsett om du vill att din chattbot ska vara vänlig och informell eller formell och professionell har du full kontroll. <br><br>Du kan till och med anpassa chattbotens användarprofil och färgschema så att de smälter in i din hemsidas design. Med vår chattbot får du inte bara en AI-lösning, du får en varumärkesambassadör som behärskar ditt språk.";
  container1.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container2.style.backgroundColor = "rgb(56, 27, 117)";
  container3.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container4.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
};

document.getElementById('section_ourservices_button3').onclick = function() {
  title.textContent = "Språkstöd"
  description.innerHTML = "På dagens globala marknad ska språk aldrig vara ett hinder för kundtjänst. Vår chattbot övervinner språkbarriärer genom att erbjuda kundtjänst på flera språk. <br><br>Oavsett om dina kunder talar svenska, engelska, spanska, franska eller något annat språk kan vår chattbot interagera med dem på ett effektivt sätt. Detta är ett kraftfullt verktyg för att utöka din kundkrets och tillgodose en mångsidig målgrupp. <br><br>Dessutom ser chattbotten till att dina kunder känner sig hörda och förstådda, oavsett var de kommer ifrån, vilket i slutändan leder till ökad kundnöjdhet och lojalitet.";
  container1.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container2.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container3.style.backgroundColor = "rgb(56, 27, 117)";
  container4.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
};

document.getElementById('section_ourservices_button4').onclick = function() {
  title.textContent = "Uppskalning"
  description.innerHTML = "När ditt e-handelsföretag växer ökar också behovet av kundtjänst. Det är där vår chattbot verkligen briljerar. <br><br>Den är utformad för att vara skalbar, vilket innebär att den kan hantera en ständigt växande kundbas utan att kompromissa med prestandan. Oavsett om du har en liten onlinebutik eller ett stort e-handelsimperium kommer vår chattbot att anpassa sig efter dina behov. <br><br>Du behöver inte oroa dig för att växa ur din kundtjänstlösning eller drabbas av driftstopp på grund av överbelastning. Med vår chattbot får du ett pålitligt och skalbart supportsystem som växer i takt med din framgång.";
  container1.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container2.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container3.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container4.style.backgroundColor = "rgb(56, 27, 117)";
};



// Select the button and the menu element
const hamburgerButton = document.querySelector('.section_subscriptions_hamburger_button');
const hamburgerMenu = document.querySelector('.hamburger_menu');
const closeButton = document.querySelector('.section_subscriptions_hamburger_image2');

// Function to show the menu and disable scrolling
function showMenu() {
  hamburgerMenu.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Disable scrolling
}

// Function to hide the menu and enable scrolling
function hideMenu() {
  hamburgerMenu.style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable scrolling
}

// Add a click event listener to the button to show the menu
hamburgerButton.addEventListener('click', showMenu);

// Add a click event listener to the close button to hide the menu
closeButton.addEventListener('click', hideMenu);

// Handle link clicks within the menu
const menuLinks = document.querySelectorAll('.hamburger_menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default link behavior to allow smooth scrolling
    event.preventDefault();

    // Get the target section ID from the link's href
    const targetId = link.getAttribute('href').substring(1);

    // Scroll to the target section smoothly
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth',
    });

    // Close the menu
    hideMenu();
  });
});