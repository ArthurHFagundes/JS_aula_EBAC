// let notasAlunos = new Map();

// notasAlunos.set('joao', 10)
// notasAlunos.set('maria', 5)
// notasAlunos.set('carlos', 4)
// notasAlunos.set('paola', 7)
// notasAlunos.set('kauan', 6)
// notasAlunos.set('daniela', 8)
// notasAlunos.set('marcos', 9)
// notasAlunos.set('julia', 6)


// for (let [aluno, notas] of notasAlunos.entries()) {
//     if (notas >= 6) {
//         console.log(`${aluno} tirou:`, notas)
//     }
//     else {
//         console.log(`${aluno} não passou!`)
//     }
// }

const alunos = ['Bruno', 'Julia']


const alunosNota = alunos.map(function(itemAtual) { 
    return itemAtual = { 
        nome: itemAtual, 
        nota: 10
    }
})

alunosNota.push({ 
    nome: 'Carla',
    nota: 5,
})

alunosNota.push({ 
    nome: 'João',
    nota: 3,
})

alunosNota.push({ 
    nome: 'Aline',
    nota: 6,
})

console.log(alunosNota) 


function filtraQuemPassou(aluno) { 
    return aluno.nota >= 6;
}
const quemPassou = alunosNota.filter(filtraQuemPassou)


console.log(quemPassou) 