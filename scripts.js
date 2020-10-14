const btnClick = document.querySelector('#btnSet')
btnClick.addEventListener('click', btnSetClicked)
const calculateClick = document.querySelector('#calculate')
calculateClick.addEventListener('click', calculateClicked)
const exerciseSelected = document.querySelector('#exercise-name').value
var counter = 0

// Handles Add New Set button click
function btnSetClicked() {
    var form = document.querySelector('form')

    // Creates new div in form with weight and rep input fields with unique ids
    var addDiv = function() {
        ++counter;
        var newDiv = document.createElement('div')
        newDiv.id = `set-${counter}`;
        form.appendChild(newDiv);
        console.log(`Created div for set ${counter}`)

        // Create weight input with id
        var addWeight = function() {
            var input = document.createElement('input')
            input.id = `weight${counter}`;
            input.type = 'number';
            input.name = 'weight';
            input.placeholder = `Weight for set ${counter}`;
            newDiv.appendChild(input);
            console.log(`Weight input ${counter} was created`)
        };

        // Create rep input with id
        var addRep = function () {
            var input = document.createElement('input')
            input.id = `rep${counter}`;
            input.type = 'number';
            input.name = 'rep';
            input.placeholder = `Reps for set ${counter}`;
            newDiv.appendChild(input);
            console.log(`Rep input ${counter} was created`)
        };

        addWeight();
        addRep();
    }

    addDiv();
}

// Handles Calculate Average Weight Lifted button click
function calculateClicked() {
    console.log(`${exerciseSelected} selected`)
    let weightTotal = 0
    let repTotal = 0
    var calculateSection = document.querySelector('#calculations')

    for (var i=1; i<=counter; i++) {

        // Create variables that store dynamic strings to reference as id names later
        var repID = "rep" + i
        var weightID = "weight" + i

        // Use dynamic ids to grab value of each created weight and rep input field
        let currentRep = document.getElementById(repID).value
        let currentWeight = document.getElementById(weightID).value

        // Calculate total weight moved in each set
        let setWeightTotal = currentWeight * currentRep
        console.log(`${setWeightTotal} weight moved in set ${i}`)

        // Add weight moved and rep count in set to running totals of each
        weightTotal += parseInt(setWeightTotal)
        repTotal += parseInt(currentRep)
    }

    console.log(`${weightTotal} total weight lifted.`)
    console.log(`${repTotal} total reps`)

    // Creates and writes into a paragraph the average weight lifted each set
    var weightAverage = document.createElement('p');
    weightAverage.innerHTML = weightTotal / repTotal
    calculateSection.appendChild(weightAverage);
    console.log(`${weightAverage} was created`)
}