const buttonPersonal = document.getElementById("buttonPersonal");
const buttonGuided = document.getElementById("buttonGuided");
const personalTab = document.getElementById("Personal");
const guidedTab = document.getElementById("Guided");


function openTab(tab, tabButton) {
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    
  }

    tab.style.display = "block";
  };

  buttonPersonal.onclick = function () {
      openTab(personalTab, buttonPersonal);
  };

  buttonGuided.onclick = function () {
    openTab(guidedTab, buttonGuided);
  };