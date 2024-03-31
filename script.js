/*
function validateInput(input){
    if (inpu)

}
*/
form.addEventListener('submit', function(event){
    event.preventDefault() // evita o envio do form
    
    let firstValue = parseInt(document.getElementById("valueA").value)
    let secondValue = parseInt(document.getElementById("valueB").value)
    let feedback = document.getElementById("feedback")


    

    if (secondValue > firstValue){  
        feedback.innerHTML ="B is higher than A. Valid form"
        feedback.style.background = "rgb(197, 232, 184)"
        feedback.style.display = 'grid'
    } else if (firstValue == secondValue){
        feedback.innerHTML ="Equal values. Invalid form"
        feedback.style.background = "rgb(248, 230, 230)"
        feedback.style.display = 'grid'
    } else if (firstValue > secondValue){
        feedback.innerHTML ="A is higher than B. Invalid form"
        feedback.style.background = "rgb(248, 230, 230)"
        feedback.style.display = 'grid'   
    }

})


