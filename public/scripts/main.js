import Modal from "./modal.js"

//Pegar todos os botões que existem com a classe "check"

const checkButtons = document.querySelectorAll(".actions a.check")

//adicionar a escuta (eventlister)
checkButtons.forEach(button =>{   
    button.addEventListener ("click", event => {
        //abrir modal
        Modal.open()
    })
})

/*Quando o botão delete for clicado ele abre a modal */
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", event =>{
        Modal.open()
    })
})