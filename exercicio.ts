function multiplicarDoisNumeros(primeiroNumero:number, segundoNumero:number) {
    const resultado = primeiroNumero * segundoNumero;
    return(`${primeiroNumero} X ${segundoNumero} = ${resultado}`)
}


function saudacaoAhAlguem(nome:string):string {
    return(`Olá ${nome}!`);
}



console.log(multiplicarDoisNumeros(10, 20))
console.log(saudacaoAhAlguem("Matheus"))


