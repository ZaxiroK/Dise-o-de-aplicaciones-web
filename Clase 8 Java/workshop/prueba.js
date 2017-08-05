var listPersonas =[];

function PersonaInfoSistema(pNombre, pApellido, pTelefono){
    var nuevaPersona = {
    nombre : pNombre,
    apellido : pApellido,
    telefono : pTelefono
};
    
console.log(nuevaPersona);
listPersonas.push(nuevaPersona);
localStorageListPersonas(listPersonas);
}

function getListPersonas(){
    var storedList = localStorage.getItem('localListPersonas')
    if(storedList == null){
        listPersonas =[];
    }
    else
    {
        listPersonas = JSON.parse(storedList);
    }
    return listPersonas;
    }
    


function localStorageListPersonas(pList){
    localStorage.setItem('localListPersonas',JSON.stringify(pList))
}



document.querySelector('#btnRegistrar').addEventListener('click', guardarPersona)
imprimirTabla();

function guardarPersona() {
    
    var nombreValor = document.getElementById('txtNombre').value,
     apellidoValor = document.getElementById('txtApellido').value,
     telefonoValor = document.getElementById('txtTelefono').value;
    
    PersonaInfoSistema(nombreValor, apellidoValor, telefonoValor);
    imprimirTabla();
}

/*document.querySelector('#btnBorrar').addEventListener('click', borrarPersona)
imprimirTabla();

    function BorrarPersona() {
    
    var nombreValor = document.getElementById('txtNombre').value,
     apellidoValor = document.getElementById('txtApellido').value,
     telefonoValor = document.getElementById('txtTelefono').value;
    
    PersonaInfoSistema(nombreValor, apellidoValor, telefonoValor);
    imprimirTabla();
}*/
function imprimirTabla(){
    var list = [];
    list = getListPersonas();
    
        tbody = document.querySelector('#tblPersonas tbody');
    
    tbody.innerHTML = '';
    
    for(var i = 0; i <list.length; i++){
        var row = tbody.insertRow(i);
        var nombreCelda = row.insertCell(0),
            apellidoCelda = row.insertCell(1),
            telefonoCelda = row.insertCell(2),
            BorrarCell = row.insertCell(3);
            
        nombreCelda.innerHTML = list[i].nombre;
        apellidoCelda.innerHTML = list[i].apellido;
        telefonoCelda.innerHTML = list[i].telefono;
        
        
        var colBorrar = document.createElement('input');
        colBorrar.type = 'button'
        colBorrar.id = 'btnModificar', 
        colBorrar.value = 'Borrar'
        BorrarCell.appendChild(colBorrar);
        
        colBorrar.setAttribute('nombre',i + 'apellido',i + 'telefono', i);
        colBorrar.addEventListener('click', borrarPersona);
        
        tbody.appendChild(row);
    }
}
