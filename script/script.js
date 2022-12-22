document.getElementById("btn-menu").addEventListener("click", mostrar_menu);
document.getElementById("back-menu").addEventListener("click", ocultar_menu);
nav = document.getElementById("nav");
menu = document.getElementById("back-menu");



function mostrar_menu(){
    nav.style.left = "0px"
    menu.style.display="block";

}
function ocultar_menu(){
    nav.style.left = "-250px"
    menu.style.display="none";

}