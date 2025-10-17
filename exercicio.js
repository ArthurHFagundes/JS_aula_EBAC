let notasAlunos = new Map();

notasAlunos.set('joao', 10)
notasAlunos.set('maria', 5)
notasAlunos.set('carlos', 4)
notasAlunos.set('paola', 7)
notasAlunos.set('kauan', 6)
notasAlunos.set('daniela', 8)
notasAlunos.set('marcos', 9)
notasAlunos.set('julia', 6)


for (let [aluno, notas] of notasAlunos.entries()) {
    if (notas >= 6) {
        console.log(`${aluno} tirou:`, notas)
    }
    else {
        console.log(`${aluno} não passou!`)
    }
}