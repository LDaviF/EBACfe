$(document).ready(function(){

    /*
    document.querySelector('header button').addEventListener('click', function(){
      alert("Expand Form")  
    })

    The code below basically do the same thing
    */

    $('header button').click(function (){
        $('form').slideDown();
    })

    $('#Cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const newImage = $('#newImageURL').val();
        const newItem = $('<li style="display: none;"></li>');
        $(`<img src="${newImage}"></img>`).appendTo(newItem);
        $(`
            <div class="OverlayImageURL">
                <a href="${newImage}" target="blank" title="See original">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(newItem);
        $(newItem).appendTo('ul')
        $(newItem).fadeIn('1000')
        $('#newImageURL').val('')

    })
})