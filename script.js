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
   
   // the typeof for string and number are not catching -- both are logging as strings
   form.addEventListener("submit", function(event) {
      if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "") {
         alert("All fields are required to submit the form.");
         event.preventDefault();
      } else if ((typeof(pilot.value) !== "string") || (typeof(copilot.value) !== "string")) {
         console.log(`The pilot value is a ${typeof(pilot.value)}.`);
         alert("Please enter a name with letters only please.");
         event.preventDefault();
      } else if (fuel.value < 0 || cargo.value < 0) {
         alert("Please enter a positive quantity.");
         event.preventDefault();
      }
   });
});


// This block of code shows how to format the HTML once you fetch some planetary JSON!

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
      let mission = document.getElementById("missionTarget");        
      mission.innerHTML += `
      <div id = "missionTarget">
            <h2>Mission Destination</h2>
                <ol> 
                    <li>Name: ${json[3].name}</li>
                    <li>Diameter: ${json[3].diameter}</li>
                    <li>Star: ${json[3].star}</li>
                    <li>Distance from Earth: ${json[3].distance}</li>
                    <li>Number of Moons: ${json[3].moons}</li>
                </ol>
                </div>
                <img class="missionTarget img" src="${json[3].image}">
                </div>`;
               
        });
});
