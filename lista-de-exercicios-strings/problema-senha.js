/*
Problema "senha"
Um sistema exige que, no cadastro, a senha do usuário tenha pelo menos 8 caracteres no total, pelo menos uma letra (maiúscula ou minúscula), pelo menos um dígito e pelo menos um caractere especial: @, #, &. Fazer um programa para dizer se uma dada senha é válida ou inválida.

Exemplo 1:
Entrada
Saída
amerca1@
VALIDA


Exemplo 2:
Entrada
Saída
amrca154682
INVALIDA


Assinaturas:

Javascript:
function validatePassword(str)

*/

// Exemplos de uso
console.log(validatePassword("amerca1@")); 
console.log(validatePassword("amrca154682")); 

function validatePassword(str) {
    // Critérios para validação
    const hasMinLength = str.length >= 8; //A senha deve ter pelo menos 8 caracteres.
    const hasLetter = /[a-zA-Z]/.test(str); //Verifica se a senha contém pelo menos uma letra (maiúscula ou minúscula).
    const hasDigit = /\d/.test(str); //Verifica se a senha contém pelo menos um dígito(numero) (\d equivale a [0-9]).
    const hasSpecialChar = /[@#&]/.test(str); //Verifica se a senha contém pelo menos um dos caracteres especiais permitidos (@, #, &).

    // Verifica se todos os critérios são atendidos
    if (hasMinLength && hasLetter && hasDigit && hasSpecialChar) {
        return "VALIDA";
    } else {
        return "INVALIDA";
    }
}


