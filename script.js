window.addEventListener("load", function() {
   let pilot = document.querySelector("input[name=pilotName]");
   let copilot = document.querySelector("input[name=copilotName]");
   let fuel = document.querySelector("input[name=fuelLevel]");
   let cargo = document.querySelector("input[name=cargoMass]");

   let form = document.getElementById("launchForm");
   let launch = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let notReady = document.getElementById("faultyItems");

   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let fuelInput = Number(fuel.value);
      let cargoInput = Number(cargo.value);
      let specialCharacters = "1234567890!@#$%^&*()_+={}[]\|;,./?><";
      let pilotReady = false;
      let copilotReady = false;
      let fuelReady = false;
      let cargoReady = false;
      
      if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "") { 
         alert("All fields are required to submit the form.");
      }  

      for (let i = 0; i < pilot.value.length; i++) {
         if (specialCharacters.includes(pilot.value[i])) {
            alert("Please enter a name that includes letters only please."); 
            pilotStatus.textContent = `Pilot is not ready for launch`;
            pilotReady = false;
         }
         else {
            pilotReady = true;
         }
      }   

      for (let j = 0; j < copilot.value.length; j++) {
         if (specialCharacters.includes(copilot.value[j])) {
            alert("Please enter a name that includes letters only please.");
            copilotStatus.textContent = `Copilot is not ready for launch`;
            copilotReady = false;
         } else {
            copilotReady = true;
         }
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
         fuelStatus.textContent = "Fuel level is too low for launch";  
         notReady.style.visibility = "visible";         
      }

      else if (cargo.value > 10000) {
         launch.style.color = "red";  
         launch.textContent = "Shuttle is not ready for launch";
         cargoStatus.textContent = "There is too much mass for liftoff";
         notReady.style.visibility = "visible";   
      }

      else {
         fuelReady = true;
         cargoReady = true;
      }

      if (pilotReady & copilotReady & fuelReady & cargoReady) {
         launch.textContent = "Shuttle is ready for launch"
         launch.style.color = "green"; 
         pilotStatus.textContent = `Pilot ${pilot.value} is ready for launch`;
         copilotStatus.textContent = `Co-pilot ${copilot.value} is ready for launch`;
         fuelStatus.textContent = `Fuel level of ${fuel.value} is high enough for launch`;  
         cargoStatus.textContent = `Cargo mass of ${cargo.value} is low enough for launch`;  
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


