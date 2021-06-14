
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

   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let pilotInputTest = Number(pilot.value);
      let copilotInputTest = Number(copilot.value);
      let fuelInput = Number(fuel.value);
      let cargoInput = Number(cargo.value);

      if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "") { 
         alert("All fields are required to submit the form.");
      }  
       
      if (!isNaN(pilotInputTest) || !isNaN(copilotInputTest)) { 
         alert("Please enter a name with letters only please.");
      } else {
         pilotStatus.textContent = `Pilot ${pilot.value} is ready for launch`
         copilotStatus.textContent = `Co-pilot ${copilot.value} is ready for launch`
      }
      
      if (isNaN(fuelInput) || isNaN(cargoInput)) {
         alert("Please enter a quantity please.");
      }

      else if (fuel.value < 0 || cargo.value < 0) {  
         alert("Please enter a positive quantity.");
      }

      else if (fuel.value < 10000) {
         launch.style.color = "red";
         launch.textContent = "Shuttle not ready for launch";
         fuelStatus.textContent = "Fuel level too low for launch";  
         notReady.style.visibility = "visible";         
      }

      else if (cargo.value > 10000) {
         launch.style.color = "red";  
         launch.textContent = "Shuttle not ready for launch";
         cargoStatus.textContent = "There is too much mass for liftoff";
         notReady.style.visibility = "visible";   
      }

      else {
         launch.textContent = "Shuttle is ready for launch"
         launch.style.color = "green"; 
         fuelStatus.textContent = "Fuel level high enough for launch";  
         cargoStatus.textContent = "Cargo mass low enough for launch";  
         notReady.style.visibility = "visible";  
      }

   });

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
      let mission = document.getElementById("missionTarget");        
      let randomNumber = Math.floor(Math.random()*6);
      mission.innerHTML += `
            <h2>Mission Destination</h2>
               <div>
               <ol> 
                    <li>Name: ${json[randomNumber].name}</li>
                    <li>Diameter: ${json[randomNumber].diameter}</li>
                    <li>Star: ${json[randomNumber].star}</li>
                    <li>Distance from Earth: ${json[randomNumber].distance}</li>
                    <li>Number of Moons: ${json[randomNumber].moons}</li>
                </ol>
                </div>
                <img class="missionTarget img" src="${json[randomNumber].image}">
                </div>`;
               
        });
      });



});


