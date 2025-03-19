const base = document.getElementById("base")
const display = document.getElementById("display")
let value = "0"

base.addEventListener("click", (clickedElm)=>{
    let key = clickedElm.target
    switch (key.id) {
        case "btn_clear":
            resetCalc()
        case "btn_equal":
            solveCalc()
        default:
            insertKey(key.innerHTML)
    }
})

function insertKey(newValue){
    if (value === "0") {
        value = newValue
    } else {
        value = value + newValue
    }
    updateCalc()
}

function updateCalc(){
    display.innerHTML = value
}

function resetCalc(){
    value = "0"
    updateCalc()
}

function solveCalc(){
    value = eval(value)
    updateCalc()
}
