
//const scriptHelper = require('./scriptHelper.js')

//import { myFetch, formSubmission, addDestinationInfo, pickPlanet} from "./scriptHelper.js"
// Write your JavaScript code here!


window.addEventListener("load", function () {
    let documentt = this.document
    console.log("PAGE LOAD COMPELTE")


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        listedPlanets.json().then(function(json){
            // console.log(json)
            planet = pickPlanet(json)

            console.log(planet)

            addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.imageUrl)
        })
    })



    let form = this.document.querySelector("form")

    form.addEventListener("submit", function (event) {


        let pilotNameInput = form.querySelector("input[name=pilotName]")
        let copilotNameInput = form.querySelector("input[name=copilotName]")
        let fuelLevelInput = form.querySelector("input[name=fuelLevel]")
        let cargoMassInput = form.querySelector("input[name=cargoMass]")



        formSubmission(documentt, 0, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value)

        console.log("after formsub")




        // validateInput('test');
        event.preventDefault();


    })

})

