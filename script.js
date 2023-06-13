// 1 - Crie um programa que leia duas palavras e as concatene, exibindo a palavra resultante, utilizando "template literals".
function concatenacao() {
    let palavra1 = document.getElementById("inputPalavra1").value;
    let palavra2 = document.getElementById("inputPalavra2").value;

    console.log(`Palavra1 : ${palavra1}`);
    console.log(`Palavra2 : ${palavra2}`);
    document.getElementById("resultadoPalavra").value = `Resultado: ${palavra1 + palavra2}`;
}

// 2 - Faça um programa que clone uma listagem de frutas, mínimo 3 frutas e crie outro array com frutas diferentes mais o clone, utilize Spread Operator.
function  cloneArray() {
    let arrayFrutas = document.getElementsByClassName("arrays");

    https://horadecodar.com.br/verificar-se-um-array-contem-o-elemento-de-outro-array-em-javascript/

}

// 3 - Crie uma classe cliente com os seguintes parametros: nome, email, cpf e chame uma função com Arrow function chamada relatório e exiba em uma string o nome da pessoa, o seu cpf e o seu email utilizando template literals.

