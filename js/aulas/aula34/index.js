const form = document.getElementById("form")
const newItem = document.getElementById("inputNewItem")
const box1 = document.getElementById("box1")
let items = [...box1.children].length

form.addEventListener("submit", (evt)=>{
    evt.preventDefault()
    const addedNewItem = document.createElement("div")
    addedNewItem.setAttribute("id", `item${items+1}`)
    addedNewItem.setAttribute("class", "items")
    addedNewItem.innerHTML = newItem.value
    box1.appendChild(addedNewItem)
})

console.log(items)