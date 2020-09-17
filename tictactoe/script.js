function pickMe(a) {
    var element = document.getElementsByClassName("zone");
    element[a].classList.add("selected");
    element[a].style.pointerEvents = 'none';
}

const allBoxes = document.querySelectorAll('.zone');

allBoxes.forEach(function(a) {
        a.addEventListener('click', function() {
            pseudoAI();

        })
    })
    // Keep tab of scores
var playerScore = Number(document.querySelectorAll('#player-score')[0].textContent);
var botScore = Number(document.querySelectorAll('#bot-score')[0].textContent);

function resetGame() {
    var element = Array.apply(null, document.getElementsByClassName("zone"));
    // Reset Score
    document.querySelectorAll('#player-score')[0].textContent = "0";
    document.querySelectorAll('#bot-score')[0].textContent = "0";

    setTimeout(function() {
        element.forEach(function(item) {
            item.style.pointerEvents = 'auto';
            item.classList.remove("selected");
            item.classList.remove("selected-ai");


            setTimeout(function() {
                item.classList.add("resetting");
                setTimeout(function() {
                    item.classList.remove("resetting");

                }, 250);
            }, 300);
        });
    }, 500);
}


function checkWin(arr) {
    const win1 = arr.every(val => ["1", "2", "3"].includes(val) && arr.length >= 3);
    const win2 = arr.every(val => ["4", "5", "6"].includes(val) && arr.length >= 3);
    const win3 = arr.every(val => ["7", "8", "9"].includes(val) && arr.length >= 3);
    const win4 = arr.every(val => ["1", "4", "7"].includes(val) && arr.length >= 3);
    const win5 = arr.every(val => ["2", "5", "8"].includes(val) && arr.length >= 3);
    const win6 = arr.every(val => ["3", "6", "9"].includes(val) && arr.length >= 3);
    const win7 = arr.every(val => ["1", "5", "9"].includes(val) && arr.length >= 3);
    const win8 = arr.every(val => ["3", "5", "7"].includes(val) && arr.length >= 3);

    const win1x = ["1", "2", "3"].every(val => arr.includes(val) && arr.length >= 3);
    const win2x = ["4", "5", "6"].every(val => arr.includes(val) && arr.length >= 3);
    const win3x = ["7", "8", "9"].every(val => arr.includes(val) && arr.length >= 3);
    const win4x = ["1", "4", "7"].every(val => arr.includes(val) && arr.length >= 3);
    const win5x = ["2", "5", "8"].every(val => arr.includes(val) && arr.length >= 3);
    const win6x = ["3", "6", "9"].every(val => arr.includes(val) && arr.length >= 3);
    const win7x = ["1", "5", "9"].every(val => arr.includes(val) && arr.length >= 3);
    const win8x = ["3", "5", "7"].every(val => arr.includes(val) && arr.length >= 3);

    if (win1 | win2 | win3 | win4 | win5 | win6 | win7 | win8 |
        win1x | win2x | win3x | win4x | win5x | win6x | win7x | win8x) {
        decision = true;
    } else {
        decision = false;
    }
    return decision;
}

allBoxes.forEach(function(a) {
    a.addEventListener('mousemove', function() {
        var taken_ai = document.querySelectorAll('.selected-ai');
        taken_ai_ = Array.apply(null, taken_ai);
        var bot = []
        taken_ai_.forEach(function(item) {
            bot.push(item.id);
        });

        if (bot.length >= 1) {
            if (checkWin(bot)) {
                console.log('BOT WIN');
                resetLosingGame();
            } else {
                null
            }
        } else {
            null
        }
    })
})

function resetWinningGame() {
    var element = Array.apply(null, document.getElementsByClassName("zone"));
    playerScore += 1;
    document.querySelectorAll('#player-score')[0].textContent = playerScore;
    setTimeout(function() {
        element.forEach(function(item) {
            item.style.pointerEvents = 'auto';
            item.classList.remove("selected");
            item.classList.remove("selected-ai");

            setTimeout(function() {
                item.classList.add("winning");
                setTimeout(function() {
                    item.classList.remove("winning");
                }, 1250);
            }, 300);
        });
    }, 500);
}

function resetLosingGame() {
    var element = Array.apply(null, document.getElementsByClassName("zone"));
    // To fix Bot Score
    botScore += 1;
    document.querySelectorAll('#bot-score')[0].textContent = botScore;
    setTimeout(function() {
        element.forEach(function(item) {
            item.style.pointerEvents = 'auto';
            item.classList.remove("selected");
            item.classList.remove("selected-ai");

            setTimeout(function() {
                item.classList.add("losing");

                setTimeout(function() {
                    item.classList.remove("losing");
                }, 1500);
            }, 300);
        });
    }, 500);
}

function pseudoAI() {
    // Select all taken positions
    var taken = document.querySelectorAll('.selected');
    var allpos = document.querySelectorAll('.zone');
    var taken_ai = document.querySelectorAll('.selected-ai');

    // Convert node list to array
    taken_ = Array.apply(null, taken);
    taken_ai_ = Array.apply(null, taken_ai);
    allpos_ = Array.apply(null, allpos);

    // Get all positions
    var player = []
    taken_.forEach(function(item) {
        player.push(item.id);
    });

    var bot = []
    taken_ai_.forEach(function(item) {
        bot.push(item.id);
    });

    // Check whether it is the first move
    if (taken_.length <= 1) {
        var filtered = allpos_.filter(
            function(e) {
                return this.indexOf(e) < 0;
            },
            taken_
        );
        filtered[Math.floor(Math.random() * filtered.length)].classList.add("selected-ai");
    } else {
        // Access text value 
        console.log('PLAYER POSITIONS', player)
        console.log('BOT POSITIONS', bot)

        if (checkWin(player)) {
            console.log('YOU WIN!');
            resetWinningGame();
        } else {
            console.log('CONTINUE!!!')
            var taken = document.querySelectorAll('.selected');
            var allpos = document.querySelectorAll('.zone');

            taken_ = Array.apply(null, taken);
            allpos_ = Array.apply(null, allpos);
            var filtered = allpos_.filter(
                function(e) {
                    return this.indexOf(e) < 0;
                },
                taken_.concat(taken_ai_)
            );

            filtered[Math.floor(Math.random() * filtered.length)].classList.add("selected-ai");
        }

    }

}

// TO DO:
// MAKE IT SMARTER