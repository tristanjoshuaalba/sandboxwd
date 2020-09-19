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

var numBlocks = prompt('How many blocks?');

function genBlocks(numBlocks) {
    // Create array of id's to mark 
    var toMemorize = [];
    for (i = 1; i <= numBlocks; i++) {
        if (Math.random() >= 0.50) {
            toMemorize.push('x')
        } else {
            toMemorize.push('o')
        }
    };

    for (i = 1; i <= numBlocks; i++) {
        console.log(i);

        var newBlock = document.createElement('div');
        newBlock.id = toMemorize[i];
        newBlock.className = "memory-blocks";

        document.getElementById('game-area').appendChild(newBlock);
    }
}

// Display Patterns Momentarily
function displayPattern() {
    var memoryBlocks = document.querySelectorAll('.memory-blocks')
    memoryBlocks.forEach(function(a) {
        if (a.id === 'x') {
            a.classList.add('pattern')
        } else {
            null
        }
        setTimeout(function() {
            a.classList.remove('pattern')
            a.style.pointerEvents = 'onclick';

        }, 3000)
    })

}

genBlocks(numBlocks);

displayPattern();