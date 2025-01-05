/*
Problema "dominio-email"
Dado um email de uma pessoa, mostrar o nome de usuário e o domínio deste email. O programa deve também informar se o domínio é brasileiro (.br). Supor um email válido.

Exemplo 1:
Entrada
Saída
joao.silva23@yahoo.com.br
Usuario: joao.silva23
Dominio: yahoo.com.br 
Brasileiro: sim


Exemplo 2:
Entrada
Saída
maria123@gmail.com
Usuario: maria123
Dominio: gmail.com 
Brasileiro: nao


Assinaturas:

Javascript:
function extractEmailInformation(email)

*/
console.log("==============================================================================================")
let email = "joao.silva23@yahoo.com.br";
let emailInfo = extractEmailInformation(email);
console.log("Email: " + email)
console.log(`Nome de usuário: ${emailInfo.username}`);
console.log(`Domínio: ${emailInfo.domain}`);
console.log(`É um domínio brasileiro? ${emailInfo.isBrazilianDomain ? "Sim" : "Não"}`);

console.log("==============================================================================================")

email = "maria123@gmail.com";
emailInfo = extractEmailInformation(email);
console.log(`Nome de usuário: ${emailInfo.username}`);
console.log("Email: " + email)
console.log(`Domínio: ${emailInfo.domain}`);
console.log(`É um domínio brasileiro? ${emailInfo.isBrazilianDomain ? "Sim" : "Não"}`);





function extractEmailInformation(email) {
    const regex = /^([\w.-]+)@([\w.-]+)$/; // Expressão regular para capturar o nome de usuário e o domínio
    const match = email.match(regex); //Retorna um array
    if (match) {
        const username = match[1]; // Grupo 1: Nome de usuário
        const domain = match[2]; // Grupo 2: Domínio
        const isBrazilianDomain = /\.br$/.test(domain); // Verifica se o domínio termina com ".br" retornando true
        return {username, domain, isBrazilianDomain}; //Retorno de um objeto
    } else {
        throw new Error("Email inválido");
    }
}
