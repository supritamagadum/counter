// counter app

document.addEventListener("counter",init);

let count =  Number(sessionStorage.getItem("count")) || 0;

function init() {
    document.getElementById("count").textContent = count;
}

function increasecount() {
   count++;
   updateCount(); 
}
function decreasecount() {
    count--;
    updateCount(); 
}
function resetcount() {
    count = 0;
    updateCount();
}

function updateCount(){
    document.getElementById("count").textContent = count;
    sessionStorage.setItem("count",count);
}