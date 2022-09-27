// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    console.log(imageUrl)
    document.querySelector('#missionTarget').innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}"></img>
    `
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput === '') {
        return "Empty"
    }
    if (isNaN(testInput)) {
        return "Not a number"
    }
    if (!isNaN(testInput)) {
        return "Is a number"
    }
}

function formSubmission(documentt, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        alert("All fields required")
        event.preventDefault();
        return; // return are to avoid alert spam
    }

    if (validateInput(pilot) !== "Not a number") {
        alert("Pilot Name is a number")
        event.preventDefault();
        return;
    }

    if (validateInput(copilot) !== "Not a number") {
        alert("Co-Pilot Name is a number")
        event.preventDefault();
        return;
    }
    documentt.querySelector('#pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`;
    documentt.querySelector('#copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`;


    if (validateInput(fuelLevel) !== "Is a number") {
        alert("Fuel level is not a number")
        event.preventDefault();
        return;
    }


    if (validateInput(cargoLevel) !== "Is a number") {
        alert("Caro Mass is not a number")
        event.preventDefault();
        return;
    }


    if (fuelLevel < 10000) {
        documentt.querySelector("#faultyItems").style.visibility = "visible"
        documentt.querySelector('#fuelStatus').innerHTML = "Fuel level too low for launch"
        documentt.querySelector("#launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        documentt.querySelector("#launchStatus").style.color = "rgb(199, 37, 78)";
        return
        //event.preventDefault();

    }

    if (cargoLevel > 10000) {
        documentt.querySelector("#faultyItems").style.visibility = "visible"
        documentt.querySelector('#cargoStatus').innerHTML = "Cargo mass too heavy for launch"
        documentt.querySelector("#launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        documentt.querySelector("#launchStatus").style.color = "rgb(199, 37, 78)";
        return
        //event.preventDefault();

    }

    documentt.querySelector("#launchStatus").innerHTML = "Shuttle ready for launch";
    documentt.querySelector("#launchStatus").style.color = "green";

    //documentt.querySelector("#faultyItems").style.visibility = "hidden"

    

    console.log("after checks")

    event.preventDefault();
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    // console.log(planetsReturned)
    return planetsReturned
    
}

function pickPlanet(planets) {
    // console.log(planets.length)
    // console.log(planets[5])
    // console.log(planets[0])
   
    return planets[ Math.floor(Math.random() * planets.length)]
}



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
