// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let pilot = document.querySelector("input[name=pilotName]");
   let copilot = document.querySelector("input[name=copilotName]");
   let fuel = document.querySelector("input[name=fuelLevel]");
   let cargo = document.querySelector("input[name=cargoMass]");

   // let form = document.getElementById("launchForm");
   let launch = document.getElementById("launchStatus");
   let formSubmit = document.getElementById("formSubmit");
   
   
   // the typeof for string and number are not catching
   form.addEventListener("submit", function(event) {
      if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "") {
         alert("All fields are required to submit the form.");
         event.preventDefault();
      } else if ((typeof(pilot.value) !== "string") || (typeof(copilot.value) !== "string")) {
         alert("Please enter a name with letters only please.");
         event.preventDefault();
      } else if ((typeof(fuel.value) != "number") || (typeof(cargo.value) != "number")) {
         alert("Please enter a quantity with numbers only please.");
         event.preventDefault();
      }
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
