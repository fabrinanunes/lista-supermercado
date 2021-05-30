let input = document.getElementById("input-item");
let button = document.getElementById("botao-add");
let ul = document.getElementById("lista");
let itemButtons = document.getElementsByClassName("botao-remover");

function addItem(){
    let li = document.createElement("li");

    let xButton = document.createElement("button");
    xButton.innerHTML = "X";
    xButton.className = "botao-remover";

    li.appendChild(xButton);
    
    let text = document.createTextNode(input.value);
    if (input.value === ""){
        return false
    } else{
    li.appendChild(xButton);
    li.appendChild(text);
    ul.appendChild(li);
    }
    
    input.value = ""
    buttonEvents();
}

function deleteItem(){
    this.parentElement.remove();
}

function buttonEvents() {
    for (let i = 0; i < itemButtons.length; i++){
        itemButtons[i].addEventListener("click", deleteItem);
    }
}
button.addEventListener("click", addItem);
buttonEvents();