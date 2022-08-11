let turn = 'X';
let turnsound = new Audio("assets/ting.mp3");
let gameoversound = new Audio("assets/gameover.mp3");
let gameover =false;

//Change Turn
const changeTurn = ()=>{
    return turn==='X' ? '0' : 'X';
}

//Check Win
const checkWin = ()=>{
    let wins = [
        [0,1,2, 90, -13, 0],
        [3,4,5, 90, 0, 0],
        [6,7,8, 90, 13, 0],
        [0,3,6, 0, -13, 0],
        [1,4,7, 0, 0, 0],
        [2,5,8, 0, 13, 0],
        [0,4,8, 135, 0, 0],
        [2,4,6, 45, 0, 0],
    ];

    let boxtexts = document.getElementsByClassName("boxtext");
   wins.forEach(e=>{
        if(boxtexts[e[0]].innerText==boxtexts[e[1]].innerText && boxtexts[e[1]].innerText==boxtexts[e[2]].innerText && boxtexts[e[0]].innerText!==""){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width="200px";
            document.querySelector('.line').style.visibility = "visible";
             document.querySelector('.line').style.transform= `rotate(${e[3]}deg) translate(${e[4]}vw, ${e[5]}vw)`;
            gameoversound.play();
            gameover=true;
        }
    });
}

//Game Logic
let box = document.getElementsByClassName("box");
Array.from(box).forEach(element=>{
let boxtext = element.querySelector('.boxtext');
element.addEventListener('click', ()=>{
    if(boxtext.innerText===''){
        boxtext.innerText = turn;
       
        turn = changeTurn();
        checkWin();
        if(!gameover)  {
            turnsound.play();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    

    }
});
});

//Reset

document.getElementById("reset").addEventListener('click', ()=>{
    let boxtexts = document.getElementsByClassName("boxtext");
    Array.from(boxtexts).forEach(e=>{
        e.innerText= "";
    });
    document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width="0px";
    document.querySelector('.line').style.visibility = "hidden";
    document.querySelector('.line').style.transform= "none";
    turn='X';
    gameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
});