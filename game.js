let boxes = document.querySelectorAll("#box");
let reset= document.querySelector(".Reset");
let newgame= document.querySelector(".new-btn");
let winnername=document.querySelector(".msg");
let msgContainer=document.querySelector(".msg-container");

let turn0 = true;//player 0

const winCombinations=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],

];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turn0){
        box.innerText = "O"
        turn0=false;
       }
       else{
        box.innerText = "X";
        turn0=true;
       }
       box.disabled=true;
       checkWinner();

       
    });
   
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const checkWinner=()=>{
    for(let pattern of winCombinations){
        let posVal1= boxes[pattern[0]].innerText;
        let posVal2= boxes[pattern[1]].innerText;
        let posVal3= boxes[pattern[2]].innerText;
        if(posVal1 !="" && posVal2 !="" && posVal3 !=""){
            if(posVal1===posVal2 && posVal2===posVal3){
                // console.log("winner is ", posVal1);
                disableBoxes();
               showWinner(posVal1);
            }
        }
        
    }
   };
   const showWinner =(winner)=>{
        
    winnername.innerHTML=` &#9733;DAMM ${winner} WON LESGoOo!!!&#x2605;`; 
        msgContainer.classList.remove("hide");  
   };
   const resetGame=()=>{
        turn0=true;
        enableBoxes();
        msgContainer.classList.add("hide");
   };
   const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
   };
   newgame.addEventListener("click", resetGame);
   reset.addEventListener("click", resetGame);