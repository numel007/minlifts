const btnClick = document.querySelector('#btnSet')
btnClick.addEventListener('click', btnSetClicked)
const calculateClick = document.querySelector('#calculate')
calculateClick.addEventListener('click', calculateClicked)
const exerciseSelected = document.querySelector('#exercise-name').value
var counter = 0
var counter1 = 0

function btnSetClicked() {
    var form = document.querySelector('form')

    var addDiv = function() {
        ++counter;
        var newDiv = document.createElement('div')
        newDiv.id = `set-${counter}`;
        form.appendChild(newDiv);
        console.log(`Created div for set ${counter}`)

        var addWeight = function() {
            var input = document.createElement('input')
            input.id = `weight${counter}`;
            input.type = 'number';
            input.name = 'weight';
            input.placeholder = `Weight for set ${counter}`;
            newDiv.appendChild(input);
            console.log(`Weight input ${counter} was created`)
        };

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

function calculateClicked() {
    console.log(`${exerciseSelected} selected`)
    let weightTotal = 0

    for (var i=1; i <= counter; i++) {
        var weightId = "weight" + i
        console.log(`${i} sets created.`)
        let currentWeight = document.getElementById(weightId).value
        console.log(`${currentWeight} lifted in set${i}`)
        weightTotal += parseInt(currentWeight)
    };

    console.log(`${weightTotal} total weight lifted.`)
}