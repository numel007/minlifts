const btnClick = document.querySelector('#btnSet')
btnClick.addEventListener('click', btnSetClicked)
var counter = 0

function btnSetClicked() {
    console.log('Add new set button was clicked')
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