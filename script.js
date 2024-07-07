$(document).ready(function(){

    $('form').on("submit", function(e){
        e.preventDefault();
        const newTask = $("#inputText").val();
        const newItem = $(`<li><p>${newTask}</p> <button class="Done">Done</button></li>`);
        $(newItem).prependTo('ol');
        console.log(newTask)

        const reset = document.getElementById('inputText');
        reset.value = "";
        
    })

    $(document).on("click", ".Done", function(){
        $(this).prev('p').toggleClass('done-task');
    })

    $(document).on('click', '#clear', function(){
        $('ol').html(' ')
    })
    
})