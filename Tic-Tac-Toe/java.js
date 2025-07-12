let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const reset = () => {
    turnO = true;
    enable();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.backgroundColor = "#769FB6";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.backgroundColor = "#188FA7";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congrats You Won! : ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let ps1 = boxes[pattern[0]].innerText;
        let ps2 = boxes[pattern[1]].innerText;
        let ps3 = boxes[pattern[2]].innerText;

        if (ps1 != "" && ps2 != "" && ps3 != "") {
            if (ps1 === ps2 && ps2 === ps3) {
                showWinner(ps1);
            }
        }
    }
};

const disable = () => {
    boxes.forEach((box) => box.disabled = true);
}

const enable = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = ""; // reset background
    });
}

newBtn.addEventListener("click", reset);
resetBtn.addEventListener("click", reset);
