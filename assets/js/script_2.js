//OBJETO: traumatologia
let traumatologia = [

    //ARRAY 1: pacientes traumatología

    //objeto [0]
    {
        hora: '08:00', 
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


/************DESAFÍO EVALUADO - PARTE 1 */

let citasExtras = [
    //objeto [7]
    {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
    //objeto [8]
    {hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'ISAPRE'},
    //objeto [9]
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'FONASA'},
    //objeto [10]
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '10112348-3', prevision: 'ISAPRE'},
    //objeto [11]
    {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'ISAPRE'}
];


// metodo Concat para unir dos array
traumatologia = traumatologia.concat(citasExtras);
console.log(traumatologia);


// metodo sort para ordenar por hora
//función con (localeCompare) para determinar su orden
let ordenCitas = traumatologia.sort((a,b) => {
    //compara y devuelve el n° relativo
    return a.hora.localeCompare(b.hora)
})
console.log(ordenCitas)


/************FINAL DEL EJERCICIO 1 */


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