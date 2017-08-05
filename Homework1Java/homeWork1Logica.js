var listPersonas =[];
var personasguardadas = [];



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
        listPersonas = personasguardadas ;
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

function guardarPersonaAlEliminar(person) {
    
    var nombreValor = person.nombre,
     apellidoValor = person.apellido,
     telefonoValor = person.telefono;
    localStorageListPersonas(personasguardadas);
    
    imprimirTabla();
   
}

document.querySelector('#btnEliminar').addEventListener('click', borrarPersona);
imprimirTabla();

    function borrarPersona() {
     
      
        console.log(personasguardadas);
   // users.pop();
      personasguardadas.pop();
      localStorage.clear();
        

       personasguardadas.forEach(function(item, index) {
       guardarPersonaAlEliminar(item)
       })
        
    imprimirTabla();
    }
                                 

    

function imprimirTabla(){
    var list = getListPersonas(),
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

/*
function getListPersonas(){
    var storeList = localStorage.getItem('localPersona')
    if(storeList == null){
        listPersonas =[];
    }else{
        listPersonas = json.parce(storeList);
    }
    }
    return listPersonas;
}

function localStorageListPersonas(pPersona){
    localStorage.setItem('localPersona', JSON.stringify(pPersona));
}

listPersonas.push(nuevaPersona);
    }
    localStorageListPersonas(listPersonas);


var btnRegistrar = document.querySelector('#btnRegistrar');
var btnMostrar = document.querySelector('#btnMostrar');

btnRegistrar.addEventListener('click', function(){
    var fNombre = document.querySelector('#txtNombre').value,
        fApellido = document.querySelector('#txtApellido').value,
        fTelefono = document.querySelector('#txtTelefono').value,
        objPersonaInfo = new PersonaInfo(fNombre,fApellido,fTelefono);
        localStorage.setItem("persona",JSON.stringify(objPersonaInfo))
});

btnMostrar.addEventListener('click',function(){
    var objPersonaInfoMostrar = JSON.parse(localStorage.getItem('persona'));
    
    document.write(objPersonaInfoMostrar.nombre + " : " + objPersonaInfoMostrar.apellido
                  + " : " + objPersonaInfoMostrar.telefono);
})
*/
