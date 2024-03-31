
function validateInput(input){
        if (typeof(input) != Number){
        return false
        } else {
        True
        }
}


form.addEventListener('submit', function(event){
    event.preventDefault() // evita o envio do form

    
    let firstValue = parseInt(document.getElementById("valueA").value)
    let secondValue = parseInt(document.getElementById("valueB").value)
    let feedback = document.getElementById("title")
    let bg = document.getElementById("all")

    if (firstValue != Number || secondValue != Number){
        feedback.innerHTML ="Please, only numbers."
        bg.style.background = "rgb(248, 230, 230)"
        bg.style.color = "rgb(101, 4, 4)"
        bg.style.transition = "all 0.6s"
    }

    if (secondValue > firstValue){  
        feedback.innerHTML ="Yes, it is! Valid form"
        bg.style.background = "rgb(233, 255, 219)"
        bg.style.color = "rgb(43, 114, 2)"
        bg.style.transition = "all 0.6s"
    } else if (firstValue == secondValue){
        feedback.innerHTML ="Equal values... Invalid form"
        bg.style.background = "rgb(248, 230, 230)"
        bg.style.color = "rgb(101, 4, 4)"
        bg.style.transition = "all 0.6s"
    } else if (firstValue > secondValue){
        feedback.innerHTML ="No. Invalid form"
        bg.style.background = "rgb(248, 230, 230)"
        bg.style.color = "rgb(101, 4, 4)" 
        bg.style.transition = "all 0.6s" 
    }
})


