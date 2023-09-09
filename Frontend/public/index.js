var descriptions = document.querySelectorAll(".description");
var services = document.querySelectorAll(".services");
var healthSupport = document.querySelectorAll(".healthSupport");
var aboutUs = document.querySelectorAll(".aboutUs");

var currentLink = descriptions[0];

function changeLink(link) {
  currentLink.style.backgroundColor = "white";
  link.style.backgroundColor = "skyblue";
  currentLink = link;
}

descriptions.forEach(function(description) {
  description.addEventListener("click", function() {
    changeLink(this);
  });
});

services.forEach(function(service) {
  service.addEventListener("click", function() {
    changeLink(this);
  });
});

healthSupport.forEach(function(healthSupport) {
  healthSupport.addEventListener("click", function() {
    changeLink(this);
  });
});

aboutUs.forEach(function(aboutUs) {
  aboutUs.addEventListener("click", function() {
    changeLink(this);
  });
});
