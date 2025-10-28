function multiplicarDoisNumeros(primeiroNumero:number, segundoNumero:number):number {
    const resultado = primeiroNumero * segundoNumero;
    return resultado
}


function saudacaoAhAlguem(nome:string):string {
    return(`Olá ${nome}!`);
}


console.log(multiplicarDoisNumeros(10, 20))
console.log(saudacaoAhAlguem("Matheus"))
