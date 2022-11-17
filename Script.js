
console.log("Welcome to Tik Tak Toe")
let turn="X"
let isgameover= false;

//changeTurn
const changeTurn = ()=>{
	return turn === "X"? "0": "X"
}

//win
const checkWin = () =>{

    let boxtxt=document.getElementsByClassName('boxtxt');
    let wins =[
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
            if((boxtxt[e[0]].innerText===boxtxt[e[1]].innerText) 
 && (boxtxt[e[2]].innerText===boxtxt[e[1]].innerText) && (boxtxt[e[0]].innerText !== "") ){
 document.querySelector('.info').innerText=boxtxt[e[0]].innerText + "Won"
 isgameover = true
 }
        })
        
}

//gamelogic

let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
   let boxtxt=element.querySelector('.boxtxt');
 element.addEventListener('click',()=>{
      if(boxtxt.innerText===''){
         boxtxt.innerText=turn;
         turn = changeTurn();
         checkWin();
         if(!isgameover){
         document.getElementsByClassName("info")[0].innerText= "Turn for" + turn;
          }
          
      }
   })
})

//reset
reset.addEventListener('click',()=>{
      let boxtxt = document.querySelectorAll('.boxtxt');
            Array.from(boxtxt).forEach(element =>{
            element.innerText=""
 });
turn ="X";
isgameover= false
document.getElementsByClassName("info")[0].innerText="Turn for" + turn;
})
