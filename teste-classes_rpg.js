function Personagem(nome, classe, vida, mana) { // função base
    this.nome = nome;
    this.classe = classe;
    this.vida = vida;
    this.mana = mana;

    this.getLife = function() {
        return vida; }

    this.setLife = function(valorHP) {
        if(typeof valorHP === 'number') {
            vida = valorHP
        }
    }

    this.getMana = function() {
        return mana; }

    this.setMana = function(valorMP) {
        mana = valorMP; }

    this.levelUp = function() {
        const novaVida = vida * 1.1;
        vida = novaVida

        const novaMana = mana * 1.1
        mana = Math.round(novaMana)
    }
}

function Guerreiro(nome) { // função classe (base + atributos)
    Personagem.call(this, nome, "Guerreiro", 100, 50);

    this.levelUp = function() {
        const novaVida = this.getLife() * 1.5;
        this.setLife(novaVida);

        const novaMana = this.getMana() * 1.1;
        this.setMana(Math.round(novaMana));
    }
}

function Mago(nome) {
    Personagem.call(this, nome, "Mago", 50, 150);

    this.levelUp = function() {
        const novaVida = this.getLife() * 1.3;
        this.setLife(novaVida);

        const novaMana = this.getMana() * 1.5;
        this.setMana(novaMana);
    }
}

const personagem1 = new Personagem("Shrek", "Aldeão", 150, 50)
const personagem2 = new Guerreiro("Arthur")
const personagem3 = new Mago("Merlin")

personagem3.levelUp();
console.log('HP: ' + personagem3.getLife())
console.log('MP: ' + personagem3.getMana())

console.log(' ')

personagem2.levelUp();
console.log(`${personagem2.nome}, o ${personagem2.classe}`)
console.log('HP: ' + personagem2.getLife())
console.log('MP: ' + personagem2.getMana())

console.log(' ')

personagem1.levelUp();
console.log('HP: ' + personagem1.getLife())
console.log('MP: ' + personagem1.getMana()) // == console.log(`MP: ${personagem1.getMana()} `)

console.log(personagem1)