# jquery_ejemplo
practica jquery


    <p class="text-center">este es un parrafo</p>

    <div id="div">Este es un div</div>

    <button id="boton">click aquí</button>
 
 js
 $("p").click(function(){
    $(this).hide(4000)
    $(this).fadeIn(4000)

})

$("#boton").click(function(){
    $("#div").css({
        'background-color': 'chocolate',
        'color': '#fff',
        'padding': '10px'
    })
    
})
