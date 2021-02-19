var numSquares = 6;
var colors = generateRamdomColors(numSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


//for(var i=0 ;i<modeButtons.length;i++){
//    modeButtons[i].addEventListener("click",function(){
//        modeButtons[0].classList.remove("selected");
//        modeButtons[1].classList.remove("selected");
//        this.classList.add("selected");
//        
//        this.textContent === "Easy" ? numSquares = 32 : numSquares = 6;
//        
//        reset();
//    });
//}

//function reset(){
//     //generate new random colors
//    colors = generateRamdomColors(numSquares);
//    //pick a new random color from array
//    pickedColor = pickColor();
//    //change color display match picked color
//    colorDisplay.textContent = pickedColor;
//    //change try again button back too New color
//    resetButton.textContent = "New Colors"
//    //message display back too default
//    messageDisplay.textContent = "";
//    //change colors of square
//    for(var i=0 ;i<square.length;i++){
//        if(colors[i]){
//            square[i].style.backgroundColor = colors[i];
//        }
//        else{
//            square[i].style.display = "none";
//        }
//    }
//    h1.style.backgroundColor = "steelblue";
//}

easyBtn.addEventListener("click",function(){
   hardBtn.classList.remove("selected"); 
   easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRamdomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0 ;i<square.length;i++){
        if(colors[i]){
            square[i].style.backgroundColor = colors[i];
        }
        else{
             square[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click",function(){
   easyBtn.classList.remove("selected"); 
   hardBtn.classList.add("selected"); 
    numSquares = 6;
    colors = generateRamdomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0 ;i<square.length;i++){
        square[i].style.backgroundColor = colors[i];
        square[i].style.display = "block";
    }
})


resetButton.addEventListener("click",function(){
    //generate new random colors
    colors = generateRamdomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display match picked color
    colorDisplay.textContent = pickedColor;
    //change try again button back too 
    this.textContent = "New Colors"
    //message display back too default
    messageDisplay.textContent = "";
    //change colors of square
    for(var i=0 ;i<square.length;i++){
        square[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
})



colorDisplay.textContent = pickedColor;

for(var i=0 ;i<square.length;i++){
    square[i].style.backgroundColor = colors[i];
    
    square[i].addEventListener("click",function(){
        var clickedcolor = this.style.backgroundColor;
        if(clickedcolor === pickedColor){
            messageDisplay.textContent = "correct!";
            resetButton.textContent = "play again?"
            changeColors(clickedcolor);
            h1.style.backgroundColor = clickedcolor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!"
        }
    });
}

function changeColors(color){
    for(var i=0; i < square.length;i++){
         square[i].style.backgroundColor = color;
    }
}


function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRamdomColors(num){
    var arr = []
    
    for(var i = 0; i<num; i++){
        arr.push(randomColor())
    }
    
    return arr;
}

function randomColor(){
    //pick a "red" from 0 -255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 -255
    var b = Math.floor(Math.random() * 256);
    "rgb(r,g,b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}





























