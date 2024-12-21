let boxes = document.querySelectorAll("button");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8],
];

const resetGame = () => {
     turnO = true;
     enableBoxes();
     msgContainer.classList.add("hide");
   };

boxes.forEach((button) => {
  button.addEventListener("click",() => {
    console.log("Box are clicked");
    if(turnO){
      button.innerText = "O";
      turnO = false;
    }else {
      button.innerText = "X";
      turnO = true;

    }
    button.disabled = true;
    checkWinner();
  });
});
 
const disabledBoxes = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};


const showWinner = (winner) => {
msg.innerText = `Congratulations, Winner is ${winner}`;
msgContainer.classList.remove("hide");
disabledBoxes();
};

const checkWinner = () => {
  for(let pattern of winPattern){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
  
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if(pos1Val==pos2Val && pos2Val==pos3Val){
        console.log("winner", pos1Val);
        
        showWinner(pos1Val);
      }
    }
  }
 }
 newGameBtn.addEventListener("click", resetGame);
 resetBtn.addEventListener("click", resetGame);