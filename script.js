// Write your JavaScript code here!
window.addEventListener("load", function() {
   // let form = document.querySelector("launchForm");
   let pilot = document.querySelector("input[name=pilotName]");
   let copilot = document.querySelector("input[name=copilotName]");
   let fuel = document.querySelector("input[name=fuelLevel]");
   let cargo = document.querySelector("input[name=cargoMass]");

   let form = document.getElementById("launchForm");
   let launch = document.getElementById("launchStatus");
   let formSubmit = document.getElementById("formSubmit");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   
   // the typeof for string and number are not catching -- both are logging as strings
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "") {
         alert("All fields are required to submit the form.");
         event.preventDefault();
      }  else if ((typeof(pilot.value) !== "string") || (typeof(copilot.value) !== "string")) {
         console.log(`The pilot value is a ${typeof(pilot.value)}.`);
         alert("Please enter a name with letters only please.");
         event.preventDefault();
      } else if (fuel.value < 0 || cargo.value < 0) {
         alert("Please enter a positive quantity.");
         event.preventDefault();
      }
   });

   if (fuel.value < 10000) {
      // change faultyitems to visible
      fuelStatus.innerHTML(`There is not enough fuel for the journey.`);
   }
   pilotStatus.innerHTML(`Pilot ${pilot.value} is ready for launch.`);





});



// All this code works; disabling it right now during the construction phase.
// fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
//       response.json().then(function(json) {
//       let mission = document.getElementById("missionTarget");        
//       let randomNumber = Math.floor(Math.random()*6);
//       mission.innerHTML += `
//             <h2>Mission Destination</h2>
//                <div>
//                <ol> 
//                     <li>Name: ${json[randomNumber].name}</li>
//                     <li>Diameter: ${json[randomNumber].diameter}</li>
//                     <li>Star: ${json[randomNumber].star}</li>
//                     <li>Distance from Earth: ${json[randomNumber].distance}</li>
//                     <li>Number of Moons: ${json[randomNumber].moons}</li>
//                 </ol>
//                 </div>
//                 <img class="missionTarget img" src="${json[randomNumber].image}">
//                 </div>`;
               
//         });
// });
