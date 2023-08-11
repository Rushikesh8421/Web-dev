console.log("welcome to tictactoe!")

let music = new Audio("music.mp3")
let ting = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let isgameOver = false;

let turn = "X";

//Function to change the turn

const changeTurn = () =>{
    return turn === "X" ? "0" : "X";
}

//Function to check for a win
// music.play();
const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))
        {
            document.querySelector('.info').innerText = boxtext[e[0]].innerHTML + "won";
            isgameOver = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "56px" 
        }
    })
}

//game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if(!isgameOver)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            } 
        }
    })
})

