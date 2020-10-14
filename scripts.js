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

    // Iterates through weight input fields and adds values to weightTotal
    for (var i=1; i <= counter; i++) {
        var weightId = "weight" + i
        console.log(`${i} sets created.`)
        let currentWeight = document.getElementById(weightId).value
        console.log(`${currentWeight} lifted in set${i}`)
        weightTotal += parseInt(currentWeight)
    };

    // Iterates through rep input fields and adds values to repTotal
    for (var i=1; i<= counter; i++) {
        var repID = "rep" + i
        let currentRep = document.getElementById(repID).value
        console.log(`${currentRep} reps in set ${i}`)
        repTotal += parseInt(currentRep)
    }

    console.log(`${weightTotal} total weight lifted.`)
    console.log(`${repTotal} total reps`)
}