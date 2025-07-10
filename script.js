let btn = document.querySelectorAll('.btn');
let reset = document.querySelector('#reset');
let msgContainer = document.querySelector('#msgContainer');
let winMsg = document.querySelector('#winMsg');
let newGameButton = document.querySelector('#newGameButton');
let playerX = true;
let tie;

const winningpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const audio1 = new Audio('victory.mp3');
function victorySound(){
  audio1.play();
}

const audio2 = new Audio('mouseClick.mp3');
function boxClickSound(){
  audio2.play();
}

newGameButton.addEventListener('click', () =>{
  msgContainer.style.visibility = 'hidden';
  playerX = true;
  reset.style.visibility = 'visible';
  let newButton = btn.forEach((box) => {
    box.disabled = false;
    box.innerText = '';
  });
});

reset.addEventListener('click', () =>{
   playerX = true;
   msgContainer.innerText = '';
   let enableButton = btn.forEach((box) =>{
    box.disabled = false;
    box.innerText = '';
   });
   
});

btn.forEach( (box) =>
{
  box.addEventListener('click', () => {
       if(playerX){
        box.innerHTML = 'X';
        playerX = false;
   
       }
       else{
        box.innerHTML = '0';
        playerX = true;
       }

       box.disabled = true;
       winner();
 
  });

});

btn.forEach((cell) => 
{ 
   cell.addEventListener('click', () => {
    boxClickSound();
   })
});

const winner = () =>{
  for(let pattern of winningpattern){
    //accesing each element of winningpattern as pattern
  //##  console.log(pattern);

    //here pattern is also an array for index 0 of winningpattern ,pattern is [0,1,2],for index 1 of winningpattern,patter is [0,3,6]
    //So,we can access element of this pattern array
 //##   console.log(pattern[0],pattern[1],pattern[2]);

    //We can access each button by btn[index]
    //here, we write btn[pattern[0]].it means lets assume in second iteration of loop ,the element at first index of winning pattern is selected 
    // which is [0,3,6]. Here, in this selected array , the element at 0,1,2 index are 0,3,6 , it means btn[pattern[0]] ->  btn[0] .means
    //the first button , btn[pattern[1]] -> btn[3],it means fourth button and so on
//##  console.log(btn[pattern[0]],btn[pattern[1]],btn[pattern[2]]);

//console.log(btn[pattern[0]].innerHTML,btn[pattern[1]].innerHTML,btn[pattern[2].innerHTML]);

let posval1 = btn[pattern[0]].innerText;
let posval2 = btn[pattern[1]].innerText;
let posval3 = btn[pattern[2]].innerText;

if(posval1 != '' && posval2 != '' && posval3 != ''){
    if(posval1 == posval2 && posval2 == posval3){
       btn.forEach((box) =>{
           box.disabled = true;
       })
       reset.style.visibility = 'hidden';
       msgContainer.style.visibility = 'visible';
       victorySound();
       winMsg.innerText = 'Congratulations! Player '+ posval1;
    }
}
}
}

