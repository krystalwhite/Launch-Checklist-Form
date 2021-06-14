
/* TODO items:  
1. determine how to make isNan work
2. how to change text within the textbox

 */

window.addEventListener("load", function() {
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
   let notReady = document.getElementById("faultyItems");

   
   // the typeof for string and number are not catching -- both are logging as strings
   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let pilotInputTest = Number(pilot.value);
      let copilotInputTest = Number(copilot.value);
      let fuelInput = Number(fuel.value);
      let cargoInput = Number(cargo.value);

      // NOTE: The "inputs are empty" code block tests correctly.
      if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "") { 
         alert("All fields are required to submit the form.");
      }  
       
      // TODO: figure out how to make isNan work
      // else if (isNan(pilotInputTest) || isNan(copilotInputTest)) {  //textbook and W3 disagree here
      //    alert("Please enter a name with letters only please.");
      //    console.log(`The pilot input is ${pilotInput}, the copilot input is ${copilotInput} and this if statement was triggered.`);
      // }
      
      // else if (Number.isNan(fuelInput) || Number.isNan(cargoInput)) {
      //    alert("Please enter a quantity please.");
      // }

      // NOTE: The "inputs are negative" code block tests correctly.
      else if (fuel.value < 0 || cargo.value < 0) {  
         alert("Please enter a positive quantity.");
      }

      // NOTE: first three lines work; bottom line does not
      else if (fuel.value < 10000) {
         launch.style.color = "red";  // text of launchStatus color should be red
         launch.innerHTML = "Shuttle not ready for launch";  // text of launchStatus should change to (`Shuttle not ready for launch`);
         notReady.style.visibility = "visible";  // change faultyitems to visible
         // fuelStatus.innerHTML(`There is not enough fuel for the journey.`); // change fuelStatus text
         
      }

      // NOTE: first three lines work; bottom line does not
      else if (cargo.value > 10000) {
         launch.style.color = "red";  // text of launchStatus color should be red
         launch.innerHTML = "Shuttle not ready for launch";  // text of launchStatus should change to (`Shuttle not ready for launch`);
         notReady.style.visibility = "visible";  // change faultyitems to visible     
         // cargoStatus.innerHTML(`There is too much mass for liftoff.`);  // change cargoStatus to state (`There is too much mass for liftoff.`);
      }

      // NOTE: first line won't work, but other two will
      else {
         // launch.innerHTML = "Shuttle is ready for launch";  // text of launchStatus should change to (`Shuttle is ready for launch`);
         launch.style.color = "green"; //text of launchStatus color should be green
         notReady.style.visibility = "visible";  // change faultyitems to visible
      }



   });

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
