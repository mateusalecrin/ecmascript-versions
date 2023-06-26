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
function exercicio03() {
    const clientes = [];
    class Cliente {
        constructor(nome, email, cpf) {
            this.nome  = nome;
            this.email = email;
            this.cpf   = cpf;
        }
    }

    resultado = document.getElementById("resultado3");
    email     = document.getElementById("inputEmail").value;
    nome      = document.getElementById("inputNome").value;
    cpf       = document.getElementById("inputCpf").value;

    const cliente = new Cliente(nome, email,cpf);
    clientes.push(cliente);

    const gerarRelatorio = () => {
        let report = ``;
        clientes.forEach(cliente => {
            report += `Nome: ${cliente.nome} CPF: ${cliente.cpf} Email: ${cliente.email}\n`;
        });
        return report;
    }
    resultado.value = gerarRelatorio();
}

// 4 - Crie alguma coisa iterável.
function exercicio04() {
    let inputTexto = document.getElementById("inputTexto").value;
    let inputResultado = document.getElementById("inputResultado04");
    let texto = "";
    for (let x of inputTexto) {
        texto += x + " | ";
        console.log(texto);
    }
    inputResultado.value = texto;
}

// 4 - Dado um array de números, utilize a função map() para criar um novo array onde cada valor seja o dobro do valor correspondente do array original.

function map01() {
    input1 = document.getElementById("map01");
    input2 = document.getElementById("map001");

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }
    
    let originalArray = Array.from({ length: 5 }, generateRandomNumber);
    let doubledArray = originalArray.map(number => number * 2);
    
    input1.value = originalArray.join(" | ");
    input2.value = doubledArray.join(" | ");
}

// 5 - Dado um array de strings contendo nomes, utilize a função map() para criar um novo array onde cada nome esteja em maiúsculas.
function map02() {
    let input1 = document.getElementById("map02");
    let input2 = document.getElementById("map002");

    nomes = ["Mateus", "Ana", "Carlos", "Affonso"];
    nomesEmMaisc = nomes.map(text => text.toUpperCase());
    input1.value = nomes.join(" | ");
    input2.value = nomesEmMaisc.join(" | ");
}

// 6 - Dado um array de objetos, utilize a função map() para criar um novo array contendo apenas uma propriedade específica de cada objeto.
function map03() {
    let input1 = document.getElementById("map03");
    let input2 = document.getElementById("map003");
    
    let arrayDeObj = [{marca: "Toyota", modelo: "Etios", cor: "Branco"}, {marca: "Honda", modelo: "Fit", cor: "Preto"}, {marca: "Volkswagen", modelo: "UP!", cor: "Vermelho"}];
    
    let stringObj = arrayDeObj.map(objeto => `${objeto.marca}, ${objeto.modelo}, ${objeto.cor}`).join('\n');
    let arrayPropriedades = arrayDeObj.map(objeto => objeto.modelo).join('\n');

    input1.value = stringObj;
    input2.value = arrayPropriedades;
}

// 7 - Dado um array de números, utilize a função map() para criar um novo array onde cada valor seja a média dos valores anteriores, incluindo o valor atual.
function map04() {
    let input1 = document.getElementById("map04");
    let input2 = document.getElementById("map004");

    function generateRandomNumber() {
        return Math.floor(Math.random() * 20) + 1;
    }
    
    let originalArray = Array.from({ length: 5 }, generateRandomNumber);

    newArray = originalArray.map((value, index, array) => {
        let valoresAnteriores = array.slice(0, index + 1);
        let soma = valoresAnteriores.reduce((accumulator, currentValue) => accumulator + currentValue);
        let media = (soma / valoresAnteriores.length);
        
        if (media % 1 !== 0 && media.toFixed(2) !== media.toString()) {
            return media.toFixed(2);
        } else {
            return media;
        }
    });
    input1.value = originalArray.join(" | ");
    input2.value = newArray.join(" | ");
}

// 8 - Dado um array de strings, utilize a função map() para criar um novo array onde cada string esteja sem espaços em branco.
function map05() {
    let input1 = document.getElementById("map05");
    let input2 = document.getElementById("map005");
    
    pensadores = ["Tales de Mileto (624 a.C. - 546 a.C.)", "Pitágoras (570 a.C. - 495 a.C.)", "Heráclito (535 a.C. - 475 a.C.)", "Parmênides (515 a.C. - 450 a.C.)", "Sócrates (469 a.C. - 399 a.C.)", "Platão (428 a.C. - 348 a.C.)", "Aristóteles (384 a.C. - 322 a.C.)"];
;
    arrayFormatado = pensadores.map(elemento => elemento.replace(/\s/g , ""));
    
    console.log(pensadores.join("\n"));
    console.log(arrayFormatado.join("\n"));

    input1.value = pensadores.join("\n");
    input2.value = arrayFormatado.join("\n");
}