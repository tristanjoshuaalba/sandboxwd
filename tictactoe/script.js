function pickMe(a) {
    var element = document.getElementsByClassName("zone");
    element[a].classList.add("selected");
}

const allBoxes = document.querySelectorAll('.zone');

// CLICK ON THE BOX
allBoxes.forEach(function(a) {
    a.addEventListener('click', function() {
        // alert('HEY!!!')
        // BOT MOVES
        pseudoAI();

    })
})




function pseudoAI() {
    // Select all taken positions
    var taken = document.querySelectorAll('.selected');
    var allpos = document.querySelectorAll('.zone');
    var taken_ai = document.querySelectorAll('.selected-ai');

    // Convert node list to array
    taken_ = Array.apply(null, taken);
    taken_ai_ = Array.apply(null, taken_ai);
    allpos_ = Array.apply(null, allpos);

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
        var positions = []
        taken_.forEach(function(a) {
            positions.push(a.textContent);
        });
        console.log('POSITIONS', positions)



        const result = positions.every(val => [" 1 ", " 2 ", " 3 "].includes(val) && positions.length === 3);
        console.log('RESULT', result);

        const win1 = positions.every(val => [" 1 ", " 2 ", " 3 "].includes(val) && positions.length >= 3);
        const win2 = positions.every(val => [" 4 ", " 5 ", " 6 "].includes(val) && positions.length >= 3);
        const win3 = positions.every(val => [" 7 ", " 8 ", " 9 "].includes(val) && positions.length >= 3);
        const win4 = positions.every(val => [" 1 ", " 4 ", " 7 "].includes(val) && positions.length >= 3);
        const win5 = positions.every(val => [" 2 ", " 5 ", " 8 "].includes(val) && positions.length >= 3);
        const win6 = positions.every(val => [" 3 ", " 6 ", " 9 "].includes(val) && positions.length >= 3);
        const win7 = positions.every(val => [" 1 ", " 5 ", " 9 "].includes(val) && positions.length >= 3);
        const win8 = positions.every(val => [" 3 ", " 5 ", " 7 "].includes(val) && positions.length >= 3);


        if (win1 | win2 |
            win3 | win4 |
            win5 | win6 |
            win7 | win8) {
            console.log('YOU WIN!')

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
                taken_
            );

            filtered[Math.floor(Math.random() * filtered.length)].classList.add("selected-ai");
        }

        // console.log(positions);

        // colors.forEach(function(color) {
        //     console.log(color);
        // });


    }


    console.log(taken)






    // console.log(filtered);



    // console.log(allpos)

    // .filter(e => !taken.includes(e)));

    // const random = Math.floor(Math.random() * allpos.length);
    // console.log(random, allpos[random]);
    // var taken = [];
    // var allpos = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];


    // console.log(allpos);
    // element.forEach(function(a) {
    //     taken.push(a.textContent)
    // });
    // // console.log(taken)
    // console.log(allpos.filter(e => !taken.includes(e)));



}

// RECORD POSITION


// RANDOM POSITION



// // Listen to when the Player 1 button is clicked
// p1button.addEventListener("click", function() {
//     p1score++;
//     if (p1score < inputscorelimit) {
//         console.log('P1:', p1score);
//         p1display.textContent = p1score
//     } else {
//         console.log('P1:', p1score);
//         p1display.textContent = p1score;
//         p1display.classList.add("winner");
//         setTimeout(function() {
//             alert("GAME OVER! Player 1 wins!!!")
//             reset()
//         }, 50);
//     }
// });