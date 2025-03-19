const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const btn_transfer = document.getElementById("btn_transfer")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btn_transfer.addEventListener("click", ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    cursosSelecionados.forEach((el)=>{
        caixa2.appendChild(el)
    })
    cursosNaoSelecionados.forEach((el)=>{
        caixa1.appendChild(el)
    })
})

