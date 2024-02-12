function navAnimation(smallNav,largeNav,navPara,i){
    navPara[i].style.opacity="1";
    largeNav[i].style.backgroundPosition="right"; 
}
function navAnimation2(smallNav,largeNav,navPara,i){
    navPara[i].style.opacity="0";
    largeNav[i].style.backgroundPosition="left"; 
}

const smallNav = window.document.querySelectorAll(".navicon");
const largeNav = window.document.querySelectorAll(".badaNavIcon");
const navPara = window.document.querySelectorAll(".navPara");
console.log(navPara);
console.log(smallNav);
console.log(largeNav);
for(let i=0 ; i<largeNav.length ; i++){
    smallNav[i].addEventListener("mouseover",()=>navAnimation(smallNav,largeNav,navPara,i));
}
for(let i=0 ; i<largeNav.length ; i++){
    smallNav[i].addEventListener("mouseout",()=>navAnimation2(smallNav,largeNav,navPara,i));
}
