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
var proba = 0.20;
var levelProba = 1;
var timer = 1;
var score = 0;
var playerLevel = 1;
var scorePenalty = 3;

function genBlocks(numBlocks, proba) {
    // Create array of id's to mark 
    toMemorize = [];
    for (i = 1; i <= numBlocks; i++) {
        // Generate random number for placement
        var rand = Math.random();

        // Check whether random number exceeds probability threshold for placement
        if (rand >= proba) {
            toMemorize.push(1)
        } else {
            toMemorize.push(0)
        }
    };

    for (i = 1; i <= numBlocks; i++) {
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
        if (a.id == 1) {
            a.classList.add('pattern')
        } else {
            null
        }
        setTimeout(function() {
            a.classList.remove('pattern');
            a.id = null;

            // Adding on-click functionality to mark answers
            a.onclick = function() {
                a.classList.toggle('pattern')
            };

        }, timer * 1000)
    })

}


function checkAnswer() {
    // Querying all the memory-blocks class elements
    var memoryBlocks = document.querySelectorAll('.memory-blocks');
    var levelScore = 0;

    // Among all of the memory-blocks, which has the pattern class?
    var answerBlocks = [];
    memoryBlocks.forEach(function(item) {
            if (item.classList.value.split(" ").includes("pattern")) {
                answerBlocks.push(1);
            } else {
                answerBlocks.push(0);
            }
        })
        // Store answers in a global variable 
    b = answerBlocks;
    // Check number of intersections for the score!
    for (i = 0; i <= b.length - 1; i++) {
        if (toMemorize[i] === b[i]) {
            memoryBlocks[i].classList.add('correct');
            score += 1;
            levelScore += 1;

        } else {
            score -= scorePenalty;
            memoryBlocks[i].classList.add('wrong');
        }
    }

    if (levelScore == b.length && toMemorize.length <= 20) {
        numBlocks += 5;
        proba += 0.10
        playerLevel += 1;
        scorePenalty = playerLevel * 3;

    } else if (levelScore == b.length && toMemorize.length > 20 && proba <= 0.90) {
        proba += 0.05
    } else {
        null
    }
    document.querySelector('#player-level').textContent = playerLevel;
    document.querySelector('#player-score').textContent = score;
    document.querySelector('#penalty').textContent = scorePenalty;

    if (score < 0) {
        document.querySelector('#player-score').classList.add('losing-score');
    } else { document.querySelector('#player-score').classList.remove('losing-score'); }
    setTimeout(function() {
        cleanBlocks();
        gameProper(numBlocks, proba);
    }, 2000)
}


function cleanBlocks() {
    var memoryBlocks = document.querySelectorAll('.memory-blocks');
    memoryBlocks.forEach(function(item) {
        item.remove();
    })
}

// Start Memory Game Engine

function gameProper(numBlocks, proba) {
    genBlocks(numBlocks, proba);
    displayPattern();
}


gameProper(numBlocks, proba);



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