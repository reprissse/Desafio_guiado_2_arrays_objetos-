//OBJETO: RADIOLOGÍA
let dental = [

    //ARRAY 1: pacientes dental

    //objeto [0]
    {
        hora: '8:30', 
        especialista: 'ANDREA ZUÑIGA', 
        paciente: 'MARCELA RETAMAL', 
        rut: '11123425-6', 
        prevision: 'ISAPRE'},

    //objeto [1]
    {
        hora: '11:00', 
        especialista: 'MARIA PIA ZAÑARTU', 
        paciente: 'ANGEL MUÑOZ', 
        rut: '9878789-2', 
        prevision: 'ISAPRE'},

    //objeto [2]
    {
        hora: '11:30', 
        especialista: 'SCARLETT WITTING', 
        paciente: 'MARIO KAST', 
        rut: '7998789-5', 
        prevision: 'FONASA'
    },

    //objeto [3]
    {
        hora: '13:00', 
        especialista: 'FRANCISCO VON TEUBER', 
        paciente: 'KARIN FERNANDEZ', 
        rut: '18887662-K', 
        prevision: 'FONASA'
    },

    //objeto [4]
    {
        hora: '13:30', 
        especialista: 'EDUARDO VIÑUELA', 
        paciente: 'HUGO SANCHEZ', 
        rut: '17665461-4', 
        prevision: 'FONASA'
    },

    //objeto [5]
    {
        hora: '14:00', 
        especialista: 'RAQUEL VILLASECA', 
        paciente: 'ANA SEPULVEDA', 
        rut: '14441281-0', 
        prevision: 'ISAPRE'
    }
];


// Recorre el arreglo 'dental' (atributo length=longitus)
let tabla = '';
for (let i = 0; i < dental.length; i++) {
    //permite enumerar autmaticamente a los pacientes en base a su ingreso
    let numeroPaciente = i + 1;
    //tabla vinculada a bootstrap
    tabla += `
    <tr>
    <td>${numeroPaciente}</td>
    <td>${dental[i].hora}</td>
    <td>${dental[i].especialista}</td>
    <td>${dental[i].paciente}</td>
    <td>${dental[i].rut}</td>
    <td>${dental[i].prevision}</td>
    </tr>`;
}

// Se visualiza la tabla en base a los objetos
document.getElementById('cuerpo').innerHTML = tabla;


// Estadistica del 1 y ultimo paciente
document.write(`Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}<br>`);