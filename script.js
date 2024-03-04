let con=document.querySelectorAll(".con");
let computer=document.querySelectorAll(".computer");
let user=document.querySelector(".user");
let machine=document.querySelector(".machine");
let winModal=document.querySelector(".win-modal");
let winner=document.querySelector(".winner");
console.log(computer);
let play=document.querySelector(".play");
let random=Math.floor(Math.random()*3);
let triangle=document.querySelector(".triangle");
let score=JSON.parse(localStorage.getItem("sc"));
let loseScore=JSON.parse(localStorage.getItem("ls"));
let users=document.getElementById("userscore");
let cs=document.getElementById("computerscore");
let rulBtn=document.querySelector(".btn-rule");
let rulemodal=document.querySelector(".rule-modal");
let rulimg=document.querySelector(".rule-img");
let nextpage=document.querySelector(".next");
let pc=document.querySelector(".h4");


let win=0;
let lose=0;
if(score){
    users.innerText=score;
}
if(loseScore){
    cs.innerText=loseScore;

}


con.forEach((element,index) => {
    element.addEventListener("click", ()=>{
        user.style.opacity="1";
        triangle.style.display="none";
        con.forEach(item => {
            item.style.display="none";
        });
        element.style.display="block";
        element.classList.add("show");
        setTimeout(()=>{
           machine.style.opacity="1";
           setTimeout(() => {
            computer[random].style.display="block";
            computer[random].classList.add("right");
           },700);
           setTimeout(() => {
                if(index==random){
                    winModal.style.display="grid";
                    pc.style.display="none";
                    winner.innerText="TIE UP"
                    play.innerText="REPLAY";
                }
                else if(index==0 && random==1 || index==1 && random==2 || index==2 && random==0){
                    nextpage.style.display="flex";
                    winModal.style.display="grid";
                    winner.innerText="YOU WIN";

                    con[index].classList.add("winner-item")
                    win=score;
                    win++;
                    users.innerText=win;
                    localStorage.setItem("sc",JSON.stringify(win));

                }else{
                    winModal.style.display="grid";
                    winner.innerText="YOU LOST";

                    computer[random].classList.add("winner-item")
                    lose=loseScore;
                    lose++;
                    cs.innerText=lose;
                    localStorage.setItem("ls",JSON.stringify(lose));
                }
           },1000);
        },200);
    })
});
play.addEventListener("click",() => {
    window.location.reload();
})
nextpage.addEventListener("click",() =>{
    window.location.href = "index2.html";

})
rulBtn.addEventListener("click", () =>{
    rulemodal.style.display="flex";
    setTimeout(()=>{
        rulimg.style.transform="translateY(0)";

    },400);
})
let close=document.querySelector(".close");
close.addEventListener("click",()=>{
   
    setTimeout(() =>{
        rulemodal.style.display="none";
    },400);
})
document.body.addEventListener("click", (event) => {
    if (!rulemodal.contains(event.target) && event.target !== rulBtn) {
        rulemodal.style.display = "none";
    }
});