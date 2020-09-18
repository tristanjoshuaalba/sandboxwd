// Generate new divs

// document.createElement("DIV");

// document.addEventListener('DOMContentLoaded', function() {
//     var div = document.createElement('div');
//     div.id = 'container';
//     div.innerHTML = 'Hi there!';
//     div.className = 'border pad';

//     document.body.appendChild(div);
// }, false);


var numBlocks = prompt('How many blocks?');

function genBlocks(numBlocks) {
    for (i = 1; i <= numBlocks; i++) {
        console.log(i);

        var newBlock = document.createElement('div');
        newBlock.className = "memory-blocks";

        document.getElementById('game-area').appendChild(newBlock);
    }
}

genBlocks(numBlocks);