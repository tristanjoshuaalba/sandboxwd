// Generate new divs

// document.createElement("DIV");

// document.addEventListener('DOMContentLoaded', function() {
//     var div = document.createElement('div');
//     div.id = 'container';
//     div.innerHTML = 'Hi there!';
//     div.className = 'border pad';

//     document.body.appendChild(div);
// }, false);
// var randomNum = Math.random();
// filtered[Math.floor(randomNum * filtered.length)].classList.add("selected-ai");

// var numBlocks = prompt('How many blocks?');
var numBlocks = 5;

function genBlocks(numBlocks) {
    // Create array of id's to mark 
    toMemorize = [];
    for (i = 1; i <= numBlocks; i++) {

        var rand = Math.random();
        console.log(rand)
        if (rand >= 0.50) {
            toMemorize.push('x')
        } else {
            toMemorize.push('o')
        }
    };

    for (i = 1; i <= numBlocks; i++) {
        console.log(i);

        var newBlock = document.createElement('div');
        newBlock.id = toMemorize[i - 1];
        newBlock.className = "memory-blocks";

        document.getElementById('game-area').appendChild(newBlock);
    };

    toMemorize = toMemorize
}

// Display Patterns Momentarily
function displayPattern() {
    var memoryBlocks = document.querySelectorAll('.memory-blocks')
    memoryBlocks.forEach(function(a) {
        if (a.id == 'x') {
            a.classList.add('pattern')
        } else {
            null
        }
        setTimeout(function() {

            // HERE NOW: Selecting
            a.classList.remove('pattern');
            // a.onclick = function() {
            //     a.classList.toggle('pattern')
            // };

        }, 3000)
    })

}


function checkAnswer() {
    // Another solution: Getting indices of element in an array
    // var indices = [];
    // var array = ['a', 'b', 'a', 'c', 'a', 'd'];
    // var element = 'a';
    // var idx = array.indexOf(element);
    // while (idx != -1) {
    //     indices.push(idx);
    //     idx = array.indexOf(element, idx + 1);
    // }
    // console.log(indices);

    // Querying all the memory-blocks class elements
    var memoryBlocks = document.querySelectorAll('.memory-blocks');

    // Among all of the memory-blocks, which has the pattern class?
    var answerBlocks = [];
    memoryBlocks.forEach(function(item) {
            if (item.classList.value.split(" ").includes("pattern")) {
                answerBlocks.push('x');
            } else {
                answerBlocks.push('o');
            }
        })
        // Store answers in a global variable 
    b = answerBlocks;
    // Check number of intersections for the score!
}


// Start Memory Game Engine
genBlocks(numBlocks);

displayPattern();