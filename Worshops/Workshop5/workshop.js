$(function() {



})

function guardar() {
    var fieldValue = document.getElementById('name').value;
    var fieldValue2 = document.getElementById('lastName').value;
    var fieldValue3 = document.getElementById('email').value;
    var fieldValue4 = document.getElementById('phone').value;
    var datos = {
        nombre: fieldValue,
        apellido: fieldValue2,
        email: fieldValue3,
        telefono: fieldValue4
    }
    localStorage.setItem('datos', datos);
    console.log(datos);
}