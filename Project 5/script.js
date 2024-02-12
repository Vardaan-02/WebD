const hourEle = window.document.getElementById("hour");
const minuteEle = window.document.getElementById("minute");
const secondEle = window.document.getElementById("bottom");
const ampmEle = window.document.getElementById("top");
const Ele = window.document.getElementById("lower");
function fxn(){
    const currDate = new Date();
    let a = currDate.getHours();
    if(a>12){
        ampmEle.children[0].innerHTML="PM";
        a-=12;
    }
    hourEle.children[0].innerHTML=a;
    minuteEle.children[0].innerHTML=currDate.getMinutes();
    secondEle.children[0].innerHTML=currDate.getSeconds();
    let month = currDate.getMonth();
    let day = currDate.getDay();
    let date = currDate.getDate();
    if(month==0){
        month = "January";
    }
    else if(month==1){
        month="February"
    }
    else if(month==2){
        month="March"
    }
    else if(month==3){
        month="April"
    }
    else if(month==4){
        month="May"
    }
    else if(month==5){
        month="June"
    }
    else if(month==6){
        month="July"
    }
    else if(month==7){
        month="August"
    }
    else if(month==8){
        month="September"
    }
    else if(month==9){
        month="October"
    }
    else if(month==10){
        month="November"
    }
    else if(month==11){
        month="December"
    }
    if(day==0){
        day = "Monday";
    }
    else if(day==1){
        day="Tuesday"
    }
    else if(day==2){
        day="Wednesday"
    }
    else if(day==3){
        day="Thursday"
    }
    else if(day==4){
        day="Friday"
    }
    else if(day==5){
        day="Saturday"
    }
    else if(day==6){
        day="Sunday"
    }
    Ele.innerHTML=month+", "+day+" "+date;
}
let temp = setInterval(fxn,1000);
// const hourEle = window.document.getElementById("hour");
// hourEle.children[0].innerHTML=hour;

