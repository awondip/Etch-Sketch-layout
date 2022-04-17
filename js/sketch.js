
 let color = "black";

function createsquares(size){
 let board = document.querySelector(".board");    
 let squares = board.querySelectorAll("div");

 board.style.gridTemplateColumns =  `repeat(${size} , 1fr)`;
 board.style.gridTemplateRows =  `repeat(${size} , 1fr)`;
     
    let amount  = size * size
    for (let i = 0; i<amount;  i++){

        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white"
        board.insertAdjacentElement("beforeend", square);
    }
}
createsquares(16);

function changesize(input){
if (input >= 2  && input < 100){
    createsquares(input)
}else{
    console.log ("Too many squares");
}

}


function colorSquare(){

    if(color === "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    }else{
        this.style.backgroundColor = color;
    }
    
}

function changeColour(choice){
    color = choice;

}

function reset(){
    board = document.querySelector(".board")
    squares =board.querySelectorAll("div")
    squares.forEach((div) => div.remove());


}