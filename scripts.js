const addSetClick = document.querySelector('#addSet')
addSetClick.addEventListener('click', addSetClicked)

const calculateClick = document.querySelector('#calculate')
calculateClick.addEventListener('click', calculateClicked)

const removeSetClick = document.querySelector('#removeSet')
removeSetClick.addEventListener('click', removeSetClicked)

let exerciseSelected = document.querySelector('#exercise-name')
exerciseSelected.addEventListener('input', exerciseSelection)

var counter = 0

// Updates exerciseSelected with new selected exercise
function exerciseSelection() {
    exerciseSelected = document.querySelector('#exercise-name').value
    console.log(`${exerciseSelected} was selected.`)
}

// Handles Add New Set button click
function addSetClicked() {
    var form = document.querySelector('form')

    // Creates new div in form with weight and rep input fields with unique ids
    var addDiv = function () {
        ++counter;
        var newDiv = document.createElement('div')
        newDiv.id = `set-${counter}`;
        form.appendChild(newDiv);
        console.log(`Created set ${counter}`)

        // Create weight input with id
        var addWeight = function () {
            var input = document.createElement('input')
            input.id = `weight${counter}`;
            input.type = 'number';
            input.name = 'weight';
            input.placeholder = `Weight for set ${counter}`;
            newDiv.appendChild(input);
        };

        // Create rep input with id
        var addRep = function () {
            var input = document.createElement('input')
            input.id = `rep${counter}`;
            input.type = 'number';
            input.name = 'rep';
            input.placeholder = `Reps for set ${counter}`;
            newDiv.appendChild(input);
        };

        addWeight();
        addRep();
    }

    addDiv();
}

// Handles delete set button click
function removeSetClicked() {
    // Create ids based off current counter value
    var repID = 'rep' + counter
    var weightID = 'weight' + counter

    // Select input fields using ids
    var repInput = document.getElementById(repID);
    var weightInput = document.getElementById(weightID);

    // Remove selected input fields
    repInput.parentNode.removeChild(repInput)
    weightInput.parentNode.removeChild(weightInput)

    // Decrement counter so next created field starts from where the deleted input left off
    counter -= 1
    console.log("Deleted one rep input")
}

// Handles Calculate Average button click
function calculateClicked() {
    console.log(`${exerciseSelected} selected`)
    let weightTotal = 0
    let repTotal = 0
    var calculateSection = document.querySelector('#calculations')

    for (var i = 1; i <= counter; i++) {

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
    var liftTotals = document.createElement('p');

    // Add paragraphs with average and lifted totals
    weightAverage.innerHTML = `${exerciseSelected} averaged ${(weightTotal / repTotal).toFixed(2)}lbs/rep`
    liftTotals.innerHTML = `${weightTotal}lbs lifted over ${repTotal} reps`
    calculateSection.appendChild(weightAverage);
    calculateSection.appendChild(liftTotals);
}

// Select minutes and seconds input fields
var selectMinutes = document.querySelector('#min-input')
var selectSeconds = document.querySelector('#sec-input')

// Select start timer button
var startTimerButton = document.querySelector('#startTimer')

// Initialize variables for use in timerFunction
var minutes = 0
var seconds = 0

// Update variables with new user input times
selectMinutes.addEventListener('input', getTimes)
selectSeconds.addEventListener('input', getTimes)

// Update variables with input times
function getTimes() {
    minutes = parseInt(selectMinutes.value)
    seconds = parseInt(selectSeconds.value)
}

// Start timerFunction on button click
startTimerButton.addEventListener('click', timerFunction)

// Math for timer display
function timerFunction() {

    // Updates every 1000ms
    setInterval(function () {

        // Displays text when timer expires
        if (minutes <= 0 && seconds <= 0) {
            document.querySelector('#timer-display').innerHTML = "Timer Expired";
        }
        
        // Decrement seconds count by 1 if minutes exceeds 0, update timer display accordingly
        else if (minutes > 0) {
            seconds -= 1

            // Concatonate 0 before seconds when seconds is less than 10, for visual purposes only
            if (seconds < 10) {
                seconds = "0" + seconds
            }

            // When seconds count reaches 0, decrement minutes by 1 and reset seconds to 60
            if (seconds <= 0) {
                minutes -= 1
                seconds = 59

                if (seconds < 10) {
                    seconds = "0" + seconds
                }
            }

            document.querySelector('#timer-display').innerHTML = minutes + ":" + seconds;
        }

        // When minutes count reaches 0, hold minutes at 0 instead of decrementing again. 
        else if (minutes <= 0) {
            minutes = 0
            seconds -= 1

            if (seconds < 10) {
                seconds = "0" + seconds
            }

            document.querySelector('#timer-display').innerHTML = minutes + ":" + seconds;
        }
    }, 1000)
}