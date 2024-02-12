function newGame(arr,boxes){
    for(let i=0 ; i<9 ; i++){
        arr[i]=0;
        boxes[i].innerHTML="";
        winAnimation[i].style.display="none";
    }
}
function winAnimationCSSAdder(index,winAnimation,boxes,win){
    winAnimation[index].style.display="inline";
    if(index<3){
        winAnimation[index].style.animation="1s ease-in-out 0s 1 winHorizontal";
        winAnimation[index].style.width="35%";
    }
    else if(index<6){
        winAnimation[index].style.animation="1s ease-in-out 0s 1 winVertical";
        winAnimation[index].style.height="63%";
    }
    else if(index==7){
        winAnimation[index].style.animation="1s ease-in-out 0s 1 winDiagnal1";
        winAnimation[index].style.height="100%";
    }
    else{
        winAnimation[index].style.animation="1s ease-in-out 0s 1 winDiagnal2";
        winAnimation[index].style.height="98%";
    }
    // for(let i=0 ; i<3 ; i++){
    //     console.log(win[index][i]);
    //     if(win[index][i]==0){
    //         window.document.getElementById("brr"+win[index][i]).style.animation="1s ease-in-out 0s 1 move0";
    //         window.document.getElementById("brr"+win[index][i]).style.transform="translateX(190px) translateY(185px)";
    //     }
    //     else if(win[index][i]==1){
    //         console.log("hello");
    //         window.document.getElementById("brr"+win[index][i]).style.animation="1s ease-in-out 0s 1 move1";
    //         window.document.getElementById("brr"+win[index][i]).style.transform="translateX(0px) translateY(185px)";
    //     }
    //     else if(win[index][i]==2){
    //         window.document.getElementById("brr"+win[index][i]).style.animation="1s ease-in-out 0s 1 move2";
    //         window.document.getElementById("brr"+win[index][i]).style.transform="translateX(-190px) translateY(185px)";
    //     }
    //     else if(win[index][i]==3){
    //         window.document.getElementById("brr"+win[index][i]).style.animation="1s ease-in-out 0s 1 move3";
    //         window.document.getElementById("brr"+win[index][i]).style.transform="translateX(-190px) translateY(185px)";
    //     }
    //     else if(win[index][i]==5){
    //         window.document.getElementById("brr"+win[index][i]).style.animation="1s ease-in-out 0s 1 move5";
    //         window.document.getElementById("brr"+win[index][i]).style.transform="translateX(190px) translateY(-185px)";
    //     }
    //     else if(win[index][i]==6){
    //         window.document.getElementById("brr"+win[index][i]).style.animation="1s ease-in-out 0s 1 move6";
    //         window.document.getElementById("brr"+win[index][i]).style.transform="translateX(190px) translateY(-185px)";
    //     }
    //     else if(win[index][i]==7){
    //         window.document.getElementById("brr"+win[index][i]).style.animation="1s ease-in-out 0s 1 move7";
    //         window.document.getElementById("brr"+win[index][i]).style.transform="translateX(-0px) translateY(-185px)";
    //     }
    //     else if(win[index][i]==8){
    //         window.document.getElementById("brr"+win[index][i]).style.animation="1s ease-in-out 0s 1 move8";
    //         window.document.getElementById("brr"+win[index][i]).style.transform="translateX(-190px) translateY(-185px)";
    //     }
    // }
}
function htmlAdder(boxes,i,counter,arr){
    if(counter.a&1){
        boxes[i].innerHTML = "<svg class='circle' id="+"'brr"+i+"'><circle cx='50%' cy='50%' r='34%' class='outer'/></svg>";
        arr[i]=1;
    }
    else{
        boxes[i].innerHTML = "<svg class='rectange' id="+"'brr"+i+"'><rect x='-5%' y='22%' width='10%' height='100%' class='cross line1'/><rect x='69%' y='-50%' width='10%' height='100%' class='cross line2'/></svg>";
        arr[i]=2;
    }
}
function printArr(arr){
    for(let i=0 ; i<9 ; i++){
        console.log(arr[i] + " ");
    }
}
function isWin(arr,win,counter){
    for(let i=0 ; i<8 ; i++){
        let flag = 1;
        for(let j=1 ; j<3 ; j++){
            if(arr[win[i][j]]!=arr[win[i][j-1]] || arr[win[i][j]]==0){
                flag = 0;
            }
        }
        if(flag){
            counter.wini=i;
            return true;
        }
    }
    return false;
}
function whoWon(counter,player1,player2){
    if(counter.a&1){
        player1[4].innerHTML=++counter.player1;
        if(counter.player1==counter.player2){
            for(let i=0 ; i<5 ; i++){
                player1[i].classList.add("draw");
                player1[i].classList.remove("lose");
                player2[i].classList.add("draw");
                player2[i].classList.remove("win");
                player1[i].style.animation="1s ease-in-out 0s 1 drawToLose";
                player2[i].style.animation="1s ease-in-out 0s 1 winToDraw";
            }
        }
        else if(counter.player1-counter.player2==1){
            for(let i=0 ; i<5 ; i++){
                player1[i].classList.add("win");
                player1[i].classList.remove("draw");
                player2[i].classList.add("lose");
                player2[i].classList.remove("draw");
                player1[i].style.animation="1s ease-in-out 0s 1 drawToWin";
                player2[i].style.animation="1s ease-in-out 0s 1 drawToLose";
            }
        }
    }
    else{
        player2[4].innerHTML=++counter.player2;
        if(counter.player2==counter.player1){
            for(let i=0 ; i<5 ; i++){
                player1[i].classList.add("draw");
                player1[i].classList.remove("win");
                player2[i].classList.add("draw");
                player2[i].classList.remove("lose");
                player1[i].style.animation="1s ease-in-out 0s 1 winToDraw";
                player2[i].style.animation="1s ease-in-out 0s 1 loseToDraw";
            }
        }
        else if(counter.player2-counter.player1==1){
            for(let i=0 ; i<5 ; i++){
                player2[i].classList.add("win");
                player2[i].classList.remove("draw");
                player1[i].classList.add("lose");
                player1[i].classList.remove("draw");
                player2[i].style.animation="1s ease-in-out 0s 1 drawToWin";
                player1[i].style.animation="1s ease-in-out 0s 1 drawToLose";
            }
        }
    }
}

function redo(){
    newGame(arr,boxes,winAnimation);
}

function isMovePossible(arr,boxes,i,counter,win,player1,player2,winAnimation){
    if(arr[i]!=0){
        return;
    }
    else{
        arr[i]=1;
        htmlAdder(boxes,i,counter,arr);
        counter.a++;
        if(isWin(arr,win,counter)){
            //Win Animation
            winAnimationCSSAdder(counter.wini,winAnimation,boxes,win);
            whoWon(counter,player1,player2);
            setTimeout(redo,2000);
        }
    }
}


let counter = {a:0 , player1:0 , player2:0 , wini:0};
const boxes = window.document.querySelectorAll(".col");
let arr = [0,0,0,0,0,0,0,0,0];
let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const player1 = window.document.querySelectorAll(".player1");
const player2 = window.document.querySelectorAll(".player2");
const temp =[window.document.querySelectorAll(".winAnimation1") , window.document.querySelectorAll(".winAnimation2") , window.document.querySelectorAll(".winAnimation3") , window.document.querySelectorAll(".winAnimation4")];
const winAnimation = [temp[0][0],temp[0][1],temp[0][2],temp[1][0],temp[1][1],temp[1][2],temp[2][0],temp[3][0]];

window.document.getElementById("newGame").addEventListener("click",()=>newGame(arr,boxes,winAnimation));
for(let i=0 ; i<9 ; i++){
    boxes[i].addEventListener("click",()=>isMovePossible(arr,boxes,i,counter,win,player1,player2,winAnimation));
}