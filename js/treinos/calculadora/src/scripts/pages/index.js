const buttons = [...document.querySelectorAll(".button")]
const display = document.getElementById("display")
let value = "0"

buttons.forEach((el)=>{
    el.addEventListener("click", (clickedElm)=>{
        let key = clickedElm.target
        switch (key.id) {
            case "btn_clear":
                resetCalc()
                break
            case "btn_equal":
                solveCalc()
                break
            default:
                insertKey(key.innerHTML)
                break
        }
    })
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
