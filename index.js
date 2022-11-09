
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0;

function increment(){
    count++
    countEl.textContent = count;
}

function save() {
    let saved = count + " - "
    saveEl.textContent += saved
    count = 0
    countEl.textContent = count;

    
}