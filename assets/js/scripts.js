





const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




$("#btn").click(function(){
    alert("se toco el boton")
})

$("#btn2").dblclick(function(){
    alert("se toco el boton 2 veces")
})

$(".hover").hover(
    function() {$(this).css("background-color", "yellow")},
    function() {$(this).css("background-color", "")},

)

$("h2").dblclick(function(){
    $(this).css("color", "red")

})

$("#btntoggle").click(function(){
    $("#contenido").toggle()
})