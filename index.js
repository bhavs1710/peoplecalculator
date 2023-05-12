document.getElementById("btn").innerText=0;


let Btn=document.getElementById("btn")
console.log(Btn)

let count=0;
function add(){
    count+=1;
    Btn.innerText=count;
}