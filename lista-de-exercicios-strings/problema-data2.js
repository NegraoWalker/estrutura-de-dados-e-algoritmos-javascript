/*
Problema "data2"
Dados um dia, mês e ano, produzir um string no formato dd/mm/aaaa, preenchendo com zeros à esquerda o dia e mês, se necessário.

Exemplo:
Entrada
Saída
{
  "day": 21, 
  "month": 7, 
  "year": 2010
}
21/07/2010


Assinaturas:

Javascript:
function formatDate(day, month, year)

*/
const input = {
    "day": 21, 
    "month": 7, 
    "year": 2010
  }
  
console.log(formatDate(input.day, input.month, input.year));

function formatDate(day, month, year) {
    // Converte os valores para string
    let dayStr = String(day);
    let monthStr = String(month);
    let yearStr = String(year);
  
    // Valida os valores usando expressão regular
    const validDay = /^\d{1,2}$/.test(dayStr) && day >= 1 && day <= 31;
    const validMonth = /^\d{1,2}$/.test(monthStr) && month >= 1 && month <= 12;
    const validYear = /^\d{4}$/.test(yearStr);
  
    if (!validDay || !validMonth || !validYear) {
      throw new Error("Invalid date input");
    }
  
    // Formata o dia e mês com zeros à esquerda
    dayStr = dayStr.padStart(2, "0");
    monthStr = monthStr.padStart(2, "0");
  
    // Retorna a data no formato dd/mm/aaaa
    return `${dayStr}/${monthStr}/${yearStr}`;
  }
