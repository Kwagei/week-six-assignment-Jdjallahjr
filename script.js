const cells = document.querySelectorAll(".cells");
Array.from(cells).forEach(function(cells){
    cells.addEventListener("click", function(help){
        cells.innerHTML="X";  
const a = Math.floor(Math.random()*8)+0;
        if (a == 0){
            const box1 = document.getElementById("box1");
            if(box1.innerHTML === "X"){
                alert("seleted");
                box1.innerHTML = "X";
            }

            else if(box1.innerHTML === ""){
                box1.innerHTML = "O";
            }

        }
        else if (a == 1){
            const box2 = document.getElementById("box2");
            if(box2.innerHTML === "X"){
                alert("seleted");
                box2.innerHTML = "X";
            }

            else if(box2.innerHTML === ""){
                box2.innerHTML = "O";
            }
        }
        else if (a == 2){
            const box3 = document.getElementById("box3");
            if(box3.innerHTML === "X"){
                alert("seleted");
                box3.innerHTML = "X";
            }

            else if(box3.innerHTML === ""){
                box3.innerHTML = "O";
            }
        }
        else if (a == 3){
            const box4 = document.getElementById("box4");
            if(box4.innerHTML === "X"){
                alert("seleted");
                box4.innerHTML = "X";
            }

            else if(box4.innerHTML === ""){
                box4.innerHTML = "O";
            }
        }
        else if (a == 4){
            const box5 = document.getElementById("box5");
            if(box5.innerHTML === "X"){
                alert("seleted");
                box5.innerHTML = "X";
            }

            else if(box5.innerHTML === ""){
                box5.innerHTML = "O";
            }
        }
        else if (a == 5){
            const box6 = document.getElementById("box6");
            if(box6.innerHTML === "X"){
                alert("seleted");
                box6.innerHTML = "X";
            }

            else if(box6.innerHTML === ""){
                box6.innerHTML = "O";
            }
        }
        else if (a == 6){
            const box7 = document.getElementById("box7");
            if(box7.innerHTML === "X"){
                alert("seleted");
                box7.innerHTML = "X";
            }

            else if(box7.innerHTML === ""){
                box7.innerHTML = "O";
            }
        }
        else if (a == 7){
            const box8 = document.getElementById("box8");
            if(box8.innerHTML === "X"){
                alert("seleted");
                box1.innerHTML = "X";
            }

            else if(box8.innerHTML === ""){
                box8.innerHTML = "O";
            }
        }
        else if (a == 8){
            const box8 = document.getElementById("box8");
            if(box8.innerHTML === "X"){
                alert("seleted");
                box8.innerHTML = "X";
            }

            else if(box8.innerHTML === ""){
                box8.innerHTML = "O";
            }
        }
    })
})
