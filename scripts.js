const btnClick = document.querySelector('#btn')
btnClick.addEventListener('click', btnClicked)
var counter = 0

function btnClicked() {
    console.log('Button was clicked')
    var form = document.querySelector('form')

    var addDiv = function() {
        ++counter;
        var newDiv = document.createElement('div')
        newDiv.id = 'set-rep-' + counter;
        form.appendChild(newDiv);
        console.log(`Created div ${counter}`)

        var addSet = function() {
            var input = document.createElement('input')
            input.id = 'set' + counter;
            input.type = 'number';
            input.name = 'set' + counter;
            input.placeholder = 'Set ' + counter;
            newDiv.appendChild(input);
            console.log(`Set input ${counter} was created`)
        };

        var addRep = function () {
            var input = document.createElement('input')
            input.id = 'rep' + counter;
            input.type = 'number';
            input.name = 'rep' + counter;
            input.placeholder = 'Reps for set ' + counter;
            newDiv.appendChild(input);
            console.log(`Rep input ${counter} was created`)
        };

        addSet();
        addRep();
    }

    addDiv();
}