form.addEventListener('submit', function(event){
    event.preventDefault() // evita o envio do form
    
    let firstValue = parseInt(document.getElementById("valueA").value)
    let secondValue = parseInt(document.getElementById("valueB").value)

    
    //firstValue = parseInt(firstValue)
    //secondValue = parseInt(secondValue)
    console.log(firstValue)
    console.log(secondValue)
    
    if (secondValue > firstValue) {
        alert("B é maior que A. Formulário válido")
    } else if (firstValue == secondValue) {
        alert("Valores iguais. Formulário inválido")
    } else {
        alert("A é maior que B. Formulário inválido")
    }
})
