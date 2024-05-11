const inputBox = document.getElementById("inputbox");
const listcont = document.getElementById("listcontainer");


function addTask(){
    if(inputBox.value === ''){
        alert("enter a Task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();
}

listcont.addEventListener("click",function(e){
 if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
 } else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
 }
},false);

function saveData(){
    localStorage.setItem("data", listcont.innerHTML);
}

function showList(){
    listcont.innerHTML = localStorage.getItem("data");
}
showList();