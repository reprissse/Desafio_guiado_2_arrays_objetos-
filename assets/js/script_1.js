//OBJETO: RADIOLOGÍA
let radiologia = [

    //ARRAY 1: pacientes radiología

    //objeto 11:00 [0]
    {
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS', 
        rut: '9878782-1', 
        prevision: 'FONASA'
    },

    //objeto 11:30 [1]
    {
        hora: '11:30', 
        especialista: 'FEDERICO SUBERCASEAUX', 
        paciente: 'PAMELA ESTRADA', 
        rut: '15345241-3', 
        prevision: 'ISAPRE'
    },

    //objeto 15:00 [2]
    {
        hora: '15:00', 
        especialista: 'FERNANDO WURTHZ', 
        paciente: 'ARMANDO LUNA', 
        rut: '16445345-9', 
        prevision: 'ISAPRE'
    },

    //objeto 15:30 [3]
    {
        hora: '15:30', 
        especialista: 'ANA MARIA GODOY', 
        paciente: 'MANUEL GODOY', 
        rut: '17666419-0', 
        prevision: 'FONASA'
    },

    //objeto 16:00 [4]
    {
        hora: '16:00', 
        especialista: 'PATRICIA SUAZO', 
        paciente: 'RAMON ULLOA', 
        rut: '14989389-K', 
        prevision: 'FONASA'}
        
];



/*********DESAFIO EVALUADO-EJERCICIO 2  */

//metodo SHIFT = elimina el primer elemento del array
radiologia.shift()
console.log(radiologia)


//metodo POP = elimina el ultimo elemento del array
radiologia.pop()
console.log(radiologia)

/*********final del ejercicio -2 */




// Recorre el arreglo 'radiologia' (atributo length=longitus)
let tabla = '';
for (let i = 0; i < radiologia.length; i++) {
    //permite enumerar autmaticamente a los pacientes en base a su ingreso
    let numeroPaciente = i + 1;
    //tabla vinculada a bootstrap
    tabla += `
    <tr>
    <td>${numeroPaciente}</td>
    <td>${radiologia[i].hora}</td>
    <td>${radiologia[i].especialista}</td>
    <td>${radiologia[i].paciente}</td>
    <td>${radiologia[i].rut}</td>
    <td>${radiologia[i].prevision}</td>
    </tr>`;
}

// Se visualiza la tabla en base a los objetos
document.getElementById('cuerpo').innerHTML = tabla;


// Estadistica del 1 y ultimo paciente
document.write(`Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}<br>`);
