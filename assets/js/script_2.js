//OBJETO: RADIOLOGÍA
let traumatologia = [

    //ARRAY 1: pacientes radiología

    //objeto [0]
    {
        hora: '8:00', 
        especialista: 'MARIA PAZ ALTUZARRA', 
        paciente: 'PAULA SANCHEZ', 
        rut: '15554774-5', 
        prevision: 'FONASA'
    },

    //objeto [1]
    {
        hora: '10:00', 
        especialista: 'RAUL ARAYA', 
        paciente: 'ANGÉLICA NAVAS', 
        rut: '15444147-9', 
        prevision: 'ISAPRE'
    },

    //objeto [2]
    {
        hora: '10:30', 
        especialista: 'MARIA ARRIAGADA', 
        paciente: 'ANA KLAPP', 
        rut: '17879423-9', 
        prevision: 'ISAPRE'
    },

    //objeto [3]
    {
        hora: '11:00', 
        especialista: 'ALEJANDRO BADILLA', 
        paciente: 'FELIPE MARDONES', 
        rut: '1547423-6', 
        prevision: 'ISAPRE'
    },

    //objeto [4]
    {
        hora: '11:30', 
        especialista: 'CECILIA BUDNIK', 
        paciente: 'DIEGO MARRE', 
        rut: '16554741-K', 
        prevision: 'FONASA'
    },

    //objeto [5]
    {
        hora: '12:00', 
        especialista: 'ARTURO CAVAGNARO', 
        paciente: 'CECILIA MENDEZ', 
        rut: '9747535-8', 
        prevision: 'ISAPRE'
    },

    //objeto [6]
    {
        hora: '12:30', 
        especialista: 'ANDRES KANACRI', 
        paciente: 'MARCIAL SUAZO', 
        rut: '11254785-5', 
        prevision: 'ISAPRE'
    }
];


// Recorre el arreglo 'traumatologia' (atributo length=longitus)
let tabla = '';
for (let i = 0; i < traumatologia.length; i++) {
    //permite enumerar autmaticamente a los pacientes en base a su ingreso
    let numeroPaciente = i + 1;
    //tabla vinculada a bootstrap
    tabla += `
    <tr>
    <td>${numeroPaciente}</td>
    <td>${traumatologia[i].hora}</td>
    <td>${traumatologia[i].especialista}</td>
    <td>${traumatologia[i].paciente}</td>
    <td>${traumatologia[i].rut}</td>
    <td>${traumatologia[i].prevision}</td>
    </tr>`;
}

// Se visualiza la tabla en base a los objetos
document.getElementById('cuerpo').innerHTML = tabla;


// Estadistica del 1 y ultimo paciente
document.write(`Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}<br>`);