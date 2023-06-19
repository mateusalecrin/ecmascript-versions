// 1 - Crie um programa que leia duas palavras e as concatene, exibindo a palavra resultante, utilizando "template literals".
function exercicio1() {
    let palavra1 = document.getElementById("inputPalavra1").value;
    let palavra2 = document.getElementById("inputPalavra2").value;
    console.log(`Palavra1 : ${palavra1}`);
    console.log(`Palavra2 : ${palavra2}`);
    document.getElementById("resultadoPalavra").value = `Resultado: ${palavra1 + palavra2}`;
}

// 2 - Faça um programa que clone uma listagem de frutas, mínimo 3 frutas e crie outro array com frutas diferentes mais o clone, utilize Spread Operator.
function exercicio2() {
    let inputs1 = document.getElementsByClassName("arrays1");
    let inputs2 = document.getElementsByClassName("arrays2");
    let resultado = document.getElementById("resultado2");
    const todasFrutas = [
        'maçã',
        'banana',
        'laranja',
        'morango',
        'uva',
        'melancia',
        'kiwi',
        'abacaxi',
        'manga',
        'pera',
        'cereja',
        'mirtilo',
        'framboesa',
        'pêssego',
        'ameixa',
        'limão',
        'lima',
        'abacate',
        'coco',
        'romã'
    ];
    
    function sorteioDeFrutas(todasFrutas) {
        const frutasEmbaralhadas = todasFrutas.sort(() => 0.5 - Math.random());
        const frutasSelecionadas = frutasEmbaralhadas.slice(0, 6);
      
        const arrayDeFrutas1 = frutasSelecionadas.slice(0, 3); // Array 1 with the first 3 fruits
        const arrayDeFrutas2 = frutasSelecionadas.slice(3);
      
        for (i = 0; i < arrayDeFrutas1.length; i ++) {
            inputs1[i].value = arrayDeFrutas1[i];
            inputs2[i].value = arrayDeFrutas2[i];
        }
        const frutas = [...arrayDeFrutas1, ...arrayDeFrutas2];

        return frutas;
    }
    frutas = sorteioDeFrutas(todasFrutas);
    resultado.value = frutas.toString();
}

// 3 - Crie uma classe cliente com os seguintes parametros: nome, email, cpf e chame uma função com Arrow function chamada relatório e exiba em uma string o nome da pessoa, o seu cpf e o seu email utilizando template literals.

