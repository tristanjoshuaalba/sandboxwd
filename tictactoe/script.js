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

    var taken = document.querySelectorAll('.selected');
    var allpos = document.querySelectorAll('.zone');

    taken_ = Array.apply(null, taken);
    allpos_ = Array.apply(null, allpos);

    if (taken_.length <= 1) {
        // First Move
        var filtered = allpos_.filter(
            function(e) {
                return this.indexOf(e) < 0;
            },
            taken_
        );

        filtered[Math.floor(Math.random() * filtered.length)].classList.add("selected-ai");
    } else {
        // Others
        // Check if win: else continue
        var positions = []
        taken_.forEach(function(a) {
            positions.push(a.textContent);
        });



        const beta = positions.filter(i => ['1', '2', '3'].includes(i.id));

        if (beta !== null) {
            console.log('CONTINUE!')
        } else {
            console.log('WIN!!!')
        }

        console.log(positions);

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