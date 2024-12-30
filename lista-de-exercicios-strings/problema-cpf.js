/*
Problema "cpf"
Dado o CPF de uma pessoa, o qual pode conter pontos ou traços como separadores, retorne o CPF contendo somente dígitos.

Exemplo 1:
Entrada: 87409217293
Saída: 87409217293

Exemplo 2:
Entrada: 874092172-93
Saída:87409217293

Exemplo 3:
Entrada: 874.092.172-93
Saída: 87409217293

Assinaturas:

Javascript:
function removeNonDigits(str)

*/

let entrada = "87409217293";

console.log(`CPF: 87409217293 - CPF com apenas dígitos: ${removeNonDigits(entrada)}`);

entrada = "874092172-93";

console.log(`CPF: 874092172-93 - CPF com apenas dígitos: ${removeNonDigits(entrada)}`);

entrada = "874.092.172-93";

console.log(`CPF: 874.092.172-93 - CPF com apenas dígitos: ${removeNonDigits(entrada)}`);


function removeNonDigits(string) {
    return string.replace(/\D/g, ''); //Regex para formatar o CPF para somente os dígitos
}
