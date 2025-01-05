/*
Problema "data1"
Dada uma data que poderá estar no formado dia/mês/ano, sendo que o dia e mês menor que 10 pode ou não ter zero à esquerda, mostrar o dia, mês e ano separadamente, na forma numérica. Supor uma data válida.

Exemplo:
Entrada
Saída
21/07/2010
Dia: 21
Mês: 7
Ano: 2010 


Assinaturas:

Javascript:
function extractDateData(date)

*/

let data1 = "21/07/2010";
extractDateData(data1);

data1 = "05/01/2025";
extractDateData(data1);



function extractDateData(date) {
    const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    const arrayDataMatch = date.match(regex);
    if (arrayDataMatch) {
        let day = arrayDataMatch[1];
        let month = arrayDataMatch[2];
        const year = arrayDataMatch[3];

        day = day.replace(/^0+/, '');
        month = month.replace(/^0+/, '');

        console.log(`Dia: ${day}`);
        console.log(`Mês: ${month}`);
        console.log(`Ano: ${year}`);
    } else {
        console.error("Data inválida, formato esperado (dia/mês/ano).");
    }
}