const cells = document.querySelectorAll(".cells");
Array.from(cells).forEach(function(cells){
    cells.addEventListener("click", function(help){
        cells.innerHTML="X";
        const a = Math.floor(Math.random()*8)+0;
    
    function helpMe(){
        if (a == 0){
            const box1 = document.getElementById("box1");
            if(box1.innerHTML === "X"){
                alert("seleted");
                box1.innerHTML = "X";
            }
        }else if(box5.innerHTML == ""){
                box5.innerHTML = "O";
        }else if(box1.innerHTML === "X" && box2.innerHTML === "X"){
            box3.innerHTML = "O";
        }else if (box1.innerHTML === "X" && box8.innerHTML === "X"){
            box4.innerHTML = "O";
        }
        else if(box1.innerHTML === "X" && box4.innerHTML === "X"){
                box7.innerHTML = "O";
        }else if(box1.innerHTML === "X" && box3.innerHTML === "X"){
                box2.innerHTML = "O";
        }
        if(box1.innerHTML === "X" &&  box7.innerHTML === "X"){
            box4.innerHTML = "O";
        }

        if (a == 1){
            const box2 = document.getElementById("box2");
            if(box2.innerHTML === "X"){
                alert("seleted");
                box2.innerHTML = "X";
            }
        }else if(box5.innerHTML == ""){
                box5.innerHTML = "O";
        }else if (box2.innerHTML === "X" && box6.innerHTML === "X"){
            box8.innerHTML = "O";
        }else if (box4.innerHTML === "X" && box2.innerHTML === "X" ){
            box7.innerHTML = "O";
        }
        else if(box1.innerHTML === "X" && box2.innerHTML === "X"){
            box3.innerHTML = "O";
        }else if(box2.innerHTML === "X" && box3.innerHTML === "X"){
                box1.innerHTML = "O";
        }

        if (a == 2){
            const box3 = document.getElementById("box3");
            if(box3.innerHTML === "X"){
                alert("seleted");
                box3.innerHTML = "X";
            }
        }else if(box5.innerHTML == ""){
                box5.innerHTML = "O";
        }else if(box2.innerHTML === "X" && box3.innerHTML === "X"){
            box1.innerHTML = "O";
        }else if (box3.innerHTML === "X" && box4.innerHTML === "X"){
            box1.innerHTML = "O";
        }
        else if(box3.innerHTML === "X" && box6.innerHTML === "X"){
                box9.innerHTML = "O";
        }else if(box1.innerHTML === "X" && box3.innerHTML === "X"){
                box2.innerHTML = "O";
        }
        if(box3.innerHTML === "X" &&  box9.innerHTML === "X"){
            box6.innerHTML = "O";
        }

        if (a == 3){
            const box4 = document.getElementById("box4");
            if(box4.innerHTML === "X"){
                alert("seleted");
                box4.innerHTML = "X";
            }
        }else if(box5.innerHTML == ""){
                box5.innerHTML = "O";
        }else if(box1.innerHTML === "X" && box4.innerHTML === "X"){
            box7.innerHTML = "O";
        }else if(box4.innerHTML === "X" && box7.innerHTML === "X"){
                box1.innerHTML = "O";
        }

        if (a == 5){
            const box6 = document.getElementById("box6");
            if(box6.innerHTML === "X"){
                alert("seleted");
                box6.innerHTML = "X";
            }
        }else if(box5.innerHTML == ""){
                box5.innerHTML = "O";
        }else if(box3.innerHTML === "X" && box6.innerHTML === "X"){
            box9.innerHTML = "O";
        }else if(box6.innerHTML === "X" && box9.innerHTML === "X"){
                box3.innerHTML = "O";
        }

        if (a == 6){
            const box7 = document.getElementById("box7");
            if(box7.innerHTML === "X"){
                alert("seleted");
                box7.innerHTML = "X";
            }
        }else if(box5.innerHTML == ""){
                box5.innerHTML = "O";
        }else if(box7.innerHTML === "X" && box8.innerHTML === "X"){
            box9.innerHTML = "O";
        }else if(box7.innerHTML === "X" && box4.innerHTML === "X"){
                box1.innerHTML = "O";
        }else if(box7.innerHTML === "X" && box9.innerHTML === "X"){
                box8.innerHTML = "O";
        }
        if(box1.innerHTML === "X" &&  box7.innerHTML === "X"){
            box4.innerHTML = "O";
        }
        
        if (a == 7){
            const box8 = document.getElementById("box8");
            if(box8.innerHTML === "X"){
                alert("seleted");
                box8.innerHTML = "X";
            }
        }else if(box5.innerHTML == ""){
                box5.innerHTML = "O";
        }else if (box8.innerHTML === "X" && box6.innerHTML === "X"){
            box2.innerHTML = "O";
        }else if (box4.innerHTML === "X" && box8.innerHTML === "X" ){
            box1.innerHTML = "O";
        }
        else if(box7.innerHTML === "X" && box8.innerHTML === "X"){
            box9.innerHTML = "O";
        }else if(box8.innerHTML === "X" && box9.innerHTML === "X"){
                box7.innerHTML = "O";
        }
        
        if (a == 8){
            const box9 = document.getElementById("box9");
            if(box9.innerHTML === "X"){
                alert("seleted");
                box9.innerHTML = "X";
            }
        }else if(box5.innerHTML == ""){
                box5.innerHTML = "O";
        }else if(box9.innerHTML === "X" && box8.innerHTML === "X"){
            box7.innerHTML = "O";
        }else if(box9.innerHTML === "X" && box6.innerHTML === "X"){
                box3.innerHTML = "O";
        }else if(box9.innerHTML === "X" && box7.innerHTML === "X"){
                box8.innerHTML = "O";
        }
        else if(box9.innerHTML === "X" &&  box3.innerHTML === "X"){
            box6.innerHTML = "O";
        }
    }
    helpMe();

        if (a == 4){
            const box5 = document.getElementById("box5");
            if(box5.innerHTML === "X"){
                alert("seleted");
                box5.innerHTML = "X";
            }
        }else if(box5.innerHTML == "X"){
            box3.innerHTML = "O";
        }else{
            helpMe();
        }



        function winning(){
            if (box1.innerHTML === "O" && box2.innerHTML === "O" && box3.innerHTML === "O"){
                document.getElementById("condition").innerHTML = "Player O Wins!";
            }
            else if (box1.innerHTML === "O" && box4.innerHTML === "O" && box7.innerHTML === "O"){
                document.getElementById("condition").innerHTML = "Player O Wins!";
            }
            else if (box1.innerHTML === "O" && box5.innerHTML === "O" && box9.innerHTML === "O"){
                document.getElementById("condition").innerHTML = "Player O Wins!";
            }
            else if (box2.innerHTML === "O" && box5.innerHTML === "O" && box8.innerHTML === "O"){
                document.getElementById("condition").innerHTML = "Player O Wins!";
            }
            else if (box3.innerHTML === "O" && box6.innerHTML === "O" && box9.innerHTML === "O"){
                document.getElementById("condition").innerHTML = "Player O Wins!";
            }
            else if (box3.innerHTML === "O" && box5.innerHTML === "O" && box7.innerHTML === "O"){
                document.getElementById("condition").innerHTML = "Player O Wins!";
            }
            else if (box4.innerHTML === "O" && box5.innerHTML === "O" && box6.innerHTML === "O"){
                document.getElementById("condition").innerHTML = "Player O Wins!";
            }
            else if (box7.innerHTML === "O" && box8.innerHTML === "O" && box9.innerHTML === "O"){
                document.getElementById("condition").innerHTML = "Player O Wins!";
            }
        }
        winning();


        



       
        

    

        
        
        

        
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
    })
})



