var cells = document.querySelectorAll(".cells");
console.log(cells);
var player_score = 0;
var computer_score = 0;
player2inn.innerHTML = "Player 2:";
player1inn.innerHTML = "Player 1:";
var player_checker = true;

var player1;
var player2;
function playerSelection(pinpoint){
    document.getElementById("mother").style.display = "none";
    document.getElementById("parent-container").style.display = "block";
    player1 = document.getElementById(pinpoint.target.id).innerHTML;
    console.log(player1);
    if(player1 === "X"){
        player2 = "O"
    }else{
        player2 = "X"
    }
}

var keep_count = 0;
//human brain
function  human(e){
    cells.forEach(function(cells){
        cells.addEventListener("click", function(help){
        cells.innerHTML= player1;
        keep_count += 1
        
        if(player_checker === true){
            computer();
            winningStatements();
        }else{
        if(player1 === "X"){
            player1 = "O"
            winningStatements();
        }else{
            player1 = "X"
            winningStatements();
        }
    }
        })
    })
}
human();

//computer's brain
function computer(){
    var ranNum = Math.floor(Math.random()*8)+1;
    var box_id = "box" + ranNum
    console.log("box:;;",box_id);
    if(document.getElementById(box_id).innerHTML === ""){
        document.getElementById(box_id).innerHTML = player2;
        // winningStatements();
        keep_count += 1;
        
    }
    else{
        if(keep_count < 9){
            computer();
        }
    }
    console.log(keep_count);
}
//allows players to win
function winningStatements(){
    if (cells[0].innerHTML === "X" && cells[1].innerHTML === "X" && cells[2].innerHTML === "X"){
        document.getElementById("condition").innerHTML = "PLAYER X WINS!!!";
        player_score++;
        player1inn.innerHTML = "Player 1: " + player_score;  
    }
    else if (cells[0].innerHTML === "X" && cells[3].innerHTML === "X" && cells[6].innerHTML === "X"){
        document.getElementById("condition").innerHTML = "PLAYER X WINS!!!";
        player_score++;
        player1inn.innerHTML = "Player 1: " + player_score;
    }
    else if (cells[0].innerHTML === "X" && cells[4].innerHTML === "X" && cells[8].innerHTML === "X"){
        document.getElementById("condition").innerHTML = "PLAYER X WINS!!!";
        player_score++;
        player1inn.innerHTML = "Player 1: " + player_score;
    }
    else if (cells[1].innerHTML === "X" && cells[4].innerHTML === "X" && cells[7].innerHTML === "X"){
        document.getElementById("condition").innerHTML = "PLAYER X WINS!!!";
        player_score++;
        player1inn.innerHTML = "Player 1: " + player_score;
    }
    else if (cells[2].innerHTML === "X" && cells[5].innerHTML === "X" && cells[8].innerHTML === "X"){
        document.getElementById("condition").innerHTML = "PLAYER X WINS!!!";
        player_score++;
        player1inn.innerHTML = "Player 1: " + player_score;
    }
    else if (cells[2].innerHTML === "X" && cells[4].innerHTML === "X" && cells[6].innerHTML === "X"){
        document.getElementById("condition").innerHTML = "PLAYER X WINS!!!";
        player_score++;
        player1inn.innerHTML = "Player 1: " + player_score;
    }
    else if (cells[3].innerHTML === "X" && cells[4].innerHTML === "X" && cells[5].innerHTML === "X"){
        document.getElementById("condition").innerHTML = "PLAYER X WINS!!!";
        player_score++;
        player1inn.innerHTML = "Player 1: " + player_score;
    }
    else if (cells[6].innerHTML === "X" && cells[7].innerHTML === "X" && cells[8].innerHTML === "X"){
        document.getElementById("condition").innerHTML = "PLAYER X WINS!!!";
        player_score++;
        player1inn.innerHTML = "Player 1: " + player_score;
    }

    //Computer wiinning statement
    else if (cells[0].innerHTML === "O" && cells[1].innerHTML === "O" && cells[2].innerHTML === "O"){
        document.getElementById("condition").innerHTML = "PLAYER O WINS!!!";
        computer_score++;
        player2inn.innerHTML = "Player 2: " + computer_score;
    }
    else if (cells[0].innerHTML === "O" && cells[3].innerHTML === "O" && cells[6].innerHTML === "O"){
        document.getElementById("condition").innerHTML = "PLAYER O WINS!!!";
        computer_score++;
        player2inn.innerHTML = "Player 2: " + computer_score;
    }
    else if (cells[0].innerHTML === "O" && cells[4].innerHTML === "O" && cells[8].innerHTML === "O"){
        document.getElementById("condition").innerHTML = "PLAYER O WINS!!!";
        computer_score++;
        player2inn.innerHTML = "Player 2: " + computer_score;
    }
    else if (cells[1].innerHTML === "O" && cells[4].innerHTML === "O" && cells[7].innerHTML === "O"){
        document.getElementById("condition").innerHTML = "PLAYER O WINS!!!";
        computer_score++;
        player2inn.innerHTML = "Player 2: " + computer_score;
    }
    else if (cells[2].innerHTML === "O" && cells[5].innerHTML === "O" && cells[8].innerHTML === "O"){
        document.getElementById("condition").innerHTML = "PLAYER O WINS!!!";
        computer_score++;
        player2inn.innerHTML = "Player 2: " + computer_score;
    }
    else if (cells[2].innerHTML === "O" && cells[4].innerHTML === "O" && cells[6].innerHTML === "O"){
        document.getElementById("condition").innerHTML = "PLAYER O WINS!!!";
        computer_score++;
        player2inn.innerHTML = "Player 2: " + computer_score;
    }
    else if (cells[3].innerHTML === "O" && cells[4].innerHTML === "O" && cells[5].innerHTML === "O"){
        document.getElementById("condition").innerHTML = "PLAYER O WINS!!!";
        computer_score++;
        player2inn.innerHTML = "Player 2: " + computer_score;
    }
    else if (cells[6].innerHTML === "O" && cells[7].innerHTML === "O" && cells[8].innerHTML === "O"){
        document.getElementById("condition").innerHTML = "PLAYER O WINS!!!";
        computer_score++;
        player2inn.innerHTML = "Player 2: " + computer_score;
    }
    else {
        var my_draw = 0;

        if(my_draw < cells.length){
            for(let i = 0; i < cells.length; i++){
                if(cells[i].innerHTML !== ""){
                    my_draw += 1;
                }
            }
        }
        if(my_draw === 9){
            document.getElementById("condition").innerHTML = "Draw!!!";
        }
    }
    
}

// //allows game to draw
// function  Tie(){
   
// }
//allows player to select side

//listens for occupied cells
function  occupiedCells(){
    
    if(cells[ranNum].innerHTML === "X"){
        cells[ranNum].innerHTML = "X"
    }else{
        cells[ranNum].innerHTML = "O"
    }
    // cells.forEach(function(cells){
    //     cells.addEventListener("click", function(help){
    //     })
    // })
}

//takes player back to home page and restarts the entire game
function  restartGame(){
    document.getElementById("big-mother").style.display = "grid";
    document.getElementById("mother").style.display = "none";
    document.getElementById("parent-container").style.display = "none";
    playAgain();
    player_score = 0;
    computer_score = 0;
    player2inn.innerHTML = "Player 2:";
    player1inn.innerHTML = "Player 1:";
}

function  openGame(identity){
    var my_id = identity.target.id;
    console.log(my_id);
    if(my_id === "twoplayer-btn"){
        player_checker = false;
    }
    document.getElementById("big-mother").style.display = "none";
    document.getElementById("mother").style.display = "grid";
    document.getElementById("parent-container").style.display = "none";
    
}

//display players' scores
function twoPlayers(event){
    // document.getElementById("mother").style.display = "none";
    document.getElementById("parent-container").style.display = "block";
    playAgain();
    cells.innerHTML = "X";
}

//resets just the board of the game
function  playAgain(){
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("box5").innerHTML = "";
    document.getElementById("box6").innerHTML = "";
    document.getElementById("box7").innerHTML = "";
    document.getElementById("box8").innerHTML = "";
    document.getElementById("box9").innerHTML = "";
    document.getElementById("condition").innerHTML = "";
    keep_count = 0;
}


































// var score = 0;
// player2inn.innerHTML = "Player 2: " + score;
// player1inn.innerHTML = "Player 1: " + 0;
// var humman;
// var computer;
// function selectPlayer(event){
//     i.addEventListener("click", function(){
//         let i = event.target.getElementById("linked");
//     if (i === "X"){
//         human = i;
//         computer = "O";
//     }else{
//         human = "O";
//         computer = "X"
//     }      
//     })   
// }

// Array.from(cells).forEach(function(cells){
//     cells.addEventListener("click", function(help){
//         cells.innerHTML="X";
//         const a = Math.floor(Math.random()*8)+0;
    
//     function helpMe(){
//         if (a == 0){
//             const box1 = document.getElementById("box1");
//             if(box1.innerHTML === "X"){
//                 box1.innerHTML = "X";
//             }
//         }else if(box5.innerHTML == ""){
//                 box5.innerHTML = "O";
//         }else if(box1.innerHTML === "X" && box2.innerHTML === "X"){
//             box3.innerHTML = "O";
//         }else if (box1.innerHTML === "X" && box8.innerHTML === "X"){
//             box4.innerHTML = "O";
//         }
//         else if(box1.innerHTML === "X" && box4.innerHTML === "X"){
//                 box7.innerHTML = "O";
//         }else if(box1.innerHTML === "X" && box3.innerHTML === "X"){
//                 box2.innerHTML = "O";
//         }
//         if(box1.innerHTML === "X" &&  box7.innerHTML === "X"){
//             box4.innerHTML = "O";
//         }

//         if (a == 1){
//             const box2 = document.getElementById("box2");
//             if(box2.innerHTML === "X"){
//                 box2.innerHTML = "X";
//             }
//         }else if(box5.innerHTML == ""){
//                 box5.innerHTML = "O";
//         }else if (box2.innerHTML === "X" && box6.innerHTML === "X"){
//             box8.innerHTML = "O";
//         }else if (box4.innerHTML === "X" && box2.innerHTML === "X" ){
//             box7.innerHTML = "O";
//         }
//         else if(box1.innerHTML === "X" && box2.innerHTML === "X"){
//             box3.innerHTML = "O";
//         }else if(box2.innerHTML === "X" && box3.innerHTML === "X"){
//                 box1.innerHTML = "O";
//         }

//         if (a == 2){
//             const box3 = document.getElementById("box3");
//             if(box3.innerHTML === "X"){
//                 box3.innerHTML = "X";
//             }
//         }else if(box5.innerHTML == ""){
//                 box5.innerHTML = "O";
//         }else if(box2.innerHTML === "X" && box3.innerHTML === "X"){
//             box1.innerHTML = "O";
//         }else if (box3.innerHTML === "X" && box4.innerHTML === "X"){
//             box1.innerHTML = "O";
//         }
//         else if(box3.innerHTML === "X" && box6.innerHTML === "X"){
//                 box9.innerHTML = "O";
//         }else if(box1.innerHTML === "X" && box3.innerHTML === "X"){
//                 box2.innerHTML = "O";
//         }
//         if(box3.innerHTML === "X" &&  box9.innerHTML === "X"){
//             box6.innerHTML = "O";
//         }

//         if (a == 3){
//             const box4 = document.getElementById("box4");
//             if(box4.innerHTML === "X"){
//                 box4.innerHTML = "X";
//             }
//         }else if(box5.innerHTML == ""){
//                 box5.innerHTML = "O";
//         }else if(box1.innerHTML === "X" && box4.innerHTML === "X"){
//             box7.innerHTML = "O";
//         }else if(box4.innerHTML === "X" && box7.innerHTML === "X"){
//                 box1.innerHTML = "O";
//         }

//         if (a == 5){
//             const box6 = document.getElementById("box6");
//             if(box6.innerHTML === "X"){
//                 box6.innerHTML = "X";
//             }
//         }else if(box5.innerHTML == ""){
//                 box5.innerHTML = "O";
//         }else if(box3.innerHTML === "X" && box6.innerHTML === "X"){
//             box9.innerHTML = "O";
//         }else if(box6.innerHTML === "X" && box9.innerHTML === "X"){
//                 box3.innerHTML = "O";
//         }

//         if (a == 6){
//             const box7 = document.getElementById("box7");
//             if(box7.innerHTML === "X"){
//                 box7.innerHTML = "X";
//             }
//         }else if(box5.innerHTML == ""){
//                 box5.innerHTML = "O";
//         }else if(box7.innerHTML === "X" && box8.innerHTML === "X"){
//             box9.innerHTML = "O";
//         }else if(box7.innerHTML === "X" && box4.innerHTML === "X"){
//                 box1.innerHTML = "O";
//         }else if(box7.innerHTML === "X" && box9.innerHTML === "X"){
//                 box8.innerHTML = "O";
//         }
//         if(box1.innerHTML === "X" &&  box7.innerHTML === "X"){
//             box4.innerHTML = "O";
//         }
        
//         if (a == 7){
//             const box8 = document.getElementById("box8");
//             if(box8.innerHTML === "X"){
//                 box8.innerHTML = "X";
//             }
//         }else if(box5.innerHTML == ""){
//                 box5.innerHTML = "O";
//         }else if (box8.innerHTML === "X" && box6.innerHTML === "X"){
//             box2.innerHTML = "O";
//         }else if (box4.innerHTML === "X" && box8.innerHTML === "X" ){
//             box1.innerHTML = "O";
//         }
//         else if(box7.innerHTML === "X" && box8.innerHTML === "X"){
//             box9.innerHTML = "O";
//         }else if(box8.innerHTML === "X" && box9.innerHTML === "X"){
//                 box7.innerHTML = "O";
//         }else if(box8.innerHTML === "X" && box2.innerHTML === "X"){
//             box4.innerHTML = "O";
//         }
        
//         if (a == 8){
//             const box9 = document.getElementById("box9");
//             if(box9.innerHTML === "X"){
//                 box9.innerHTML = "X";
//             }
//         }else if(box5.innerHTML == ""){
//                 box5.innerHTML = "O";
//         }else if(box9.innerHTML === "X" && box8.innerHTML === "X"){
//             box7.innerHTML = "O";
//         }else if(box9.innerHTML === "X" && box6.innerHTML === "X"){
//                 box3.innerHTML = "O";
//         }else if(box9.innerHTML === "X" && box7.innerHTML === "X"){
//                 box8.innerHTML = "O";
//         }
//         else if(box9.innerHTML === "X" &&  box3.innerHTML === "X"){
//             box6.innerHTML = "O";
//         }
//     }
//     helpMe();

//         if (a == 4){
//             const box5 = document.getElementById("box5");
//             if(box5.innerHTML === "X"){
//                 box5.innerHTML = "X";
//             }
//         }else if(box5.innerHTML == "X"){
//             box3.innerHTML = "O";
//         }
//         else{
//             helpMe();
//         }
//         function winning(){
//             if (box1.innerHTML === "O" && box2.innerHTML === "O" && box3.innerHTML === "O"){
//                 score++;
//                 player2inn.innerHTML = "Player 2: " + score;
//                 document.getElementById("condition").innerHTML = "Player O Wins!";
//             }
//             else if (box1.innerHTML === "O" && box4.innerHTML === "O" && box7.innerHTML === "O"){
//                 score++;
//                 player2inn.innerHTML = "Player 2: " + score;
//                 document.getElementById("condition").innerHTML = "Player O Wins!";
//             }
//             else if (box1.innerHTML === "O" && box5.innerHTML === "O" && box9.innerHTML === "O"){
//                 score++;
//                 player2inn.innerHTML = "Player 2: " + score;
//                 document.getElementById("condition").innerHTML = "Player O Wins!";
//             }
//             else if (box2.innerHTML === "O" && box5.innerHTML === "O" && box8.innerHTML === "O"){
//                 score++;
//                 player2inn.innerHTML = "Player 2: " + score;
//                 document.getElementById("condition").innerHTML = "Player O Wins!";
//             }
//             else if (box3.innerHTML === "O" && box6.innerHTML === "O" && box9.innerHTML === "O"){
//                 score++;
//                 player2inn.innerHTML = "Player2: " + score;
//                 document.getElementById("condition").innerHTML = "Player O Wins!";
//             }
//             else if (box3.innerHTML === "O" && box5.innerHTML === "O" && box7.innerHTML === "O"){
//                 score++;
//                 player2inn.innerHTML = "Player 2: " + score;
//                 document.getElementById("condition").innerHTML = "Player O Wins!";
//             }
//             else if (box4.innerHTML === "O" && box5.innerHTML === "O" && box6.innerHTML === "O"){
//                 score++;
//                 player2inn.innerHTML = "Player 2: " + score;
//                 document.getElementById("condition").innerHTML = "Player O Wins!";
//             }
//             else if (box7.innerHTML === "O" && box8.innerHTML === "O" && box9.innerHTML === "O"){
//                 score++;
//                 player2inn.innerHTML = "Player 2: " + score;
//                 document.getElementById("condition").innerHTML = "Player O Wins!";
//             }
//         }
//         winning();

//         function tie(){
//             if (box1.innerHTML !== "" && box2.innerHTML !== "" && box3.innerHTML !== "" && box4.innerHTML !== "" && box5.innerHTML !== "" && box6.innerHTML !== "" && box7.innerHTML !== "" && box8.innerHTML !== "" && box9.innerHTML !== ""){
//                 document.getElementById("condition").innerHTML = "Game Draw!";
//             }
//         }
//         tie();

//     })

// })
//         function myRefresh(){
//             document.getElementById("box1").innerHTML = "";
//             document.getElementById("box2").innerHTML = "";
//             document.getElementById("box3").innerHTML = "";
//             document.getElementById("box4").innerHTML = "";
//             document.getElementById("box5").innerHTML = "";
//             document.getElementById("box6").innerHTML = "";
//             document.getElementById("box7").innerHTML = "";
//             document.getElementById("box8").innerHTML = "";
//             document.getElementById("box9").innerHTML = "";
//             document.getElementById("condition").innerHTML = "";
//         }       
        

        



       
        

      
        // else if (a == 1){
        //     const box2 = document.getElementById("box2");
        //     if(box2.innerHTML === "X"){
        //         alert("seleted");
        //         box2.innerHTML = "X";
        //     }

        //     else if(box2.innerHTML === ""){
        //         box2.innerHTML = "O";
        //     }
        // }
        // else if (a == 2){
        //     const box3 = document.getElementById("box3");
        //     if(box3.innerHTML === "X"){
        //         alert("seleted");
        //         box3.innerHTML = "X";
        //     }

        //     else if(box3.innerHTML === ""){
        //         box3.innerHTML = "O";
        //     }
        // }
        // else if (a == 3){
        //     const box4 = document.getElementById("box4");
        //     if(box4.innerHTML === "X"){
        //         alert("seleted");
        //         box4.innerHTML = "X";
        //     }

        //     else if(box4.innerHTML === ""){
        //         box4.innerHTML = "O";
        //     }
        // }
        // else if (a == 4){
        //     const box5 = document.getElementById("box5");
        //     if(box5.innerHTML === "X"){
        //         alert("seleted");
        //         box5.innerHTML = "X";
        //     }

        //     else if(box5.innerHTML === ""){
        //         box5.innerHTML = "O";
        //     }
        // }
        // else if (a == 5){
        //     const box6 = document.getElementById("box6");
        //     if(box6.innerHTML === "X"){
        //         alert("seleted");
        //         box6.innerHTML = "X";
        //     }

        //     else if(box6.innerHTML === ""){
        //         box6.innerHTML = "O";
        //     }
        // }
        // else if (a == 6){
        //     const box7 = document.getElementById("box7");
        //     if(box7.innerHTML === "X"){
        //         alert("seleted");
        //         box7.innerHTML = "X";
        //     }

        //     else if(box7.innerHTML === ""){
        //         box7.innerHTML = "O";
        //     }
        // }
        // else if (a == 7){
        //     const box8 = document.getElementById("box8");
        //     if(box8.innerHTML === "X"){
        //         alert("seleted");
        //         box1.innerHTML = "X";
        //     }

        //     else if(box8.innerHTML === ""){
        //         box8.innerHTML = "O";
        //     }
        // }
        // else if (a == 8){
        //     const box8 = document.getElementById("box8");
        //     if(box8.innerHTML === "X"){
        //         alert("seleted");
        //         box8.innerHTML = "X";
        //     }

        //     else if(box8.innerHTML === ""){
        //         box8.innerHTML = "O";
        //     }
        // }
    




