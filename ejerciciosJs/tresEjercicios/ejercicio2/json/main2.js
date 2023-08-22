

const materias={
    nombre: 'matematicas',
    intencidad: '5',
    profesor: 'luis martinez'
}

const materiasCadena= JSON.stringify(materias);
console.log(materiasCadena);
localStorage.setItem('materia', materiasCadena)