const calculateCompoundAmount = (principalSum, tax, time) => principalSum * ((1 + tax/100)**time)


// Converts unit1 into unit2
function timeConverter(value, valueUnit, newUnit) {
    
    if(valueUnit === newUnit)
        return value
    else if(valueUnit === "days" && newUnit === "months")
        return value / 30
    else if(valueUnit === "days" && newUnit === "years")
        return value / 365
    else if(valueUnit === "months" && newUnit === "days")
        return value * 30
    else if(valueUnit === "months" && newUnit === "years")
        return value / 12
    else if(valueUnit === "years" && newUnit === "days")
        return value * 365
    else
        return value * 12
}

function unitConverter(value, periodicValueTime, newTime) {
    
    if(periodicValueTime === newTime)
        return value
    else if(periodicValueTime === "days" && newTime === "months")
        return value * 30
    else if(periodicValueTime === "days" && newTime === "years")
        return value * 365
    else if(periodicValueTime === "months" && newTime === "days")
        return value / 30
    else if(periodicValueTime === "months" && newTime === "years")
        return value * 12
    else if(periodicValueTime === "years" && newTime === "days")
        return value / 365
    else
        return value / 12
}

/* 
Usuário quer:

    * Juros anuais de 12%
    * Rendimento em 3 meses
    * Valor: 500 reais
    * Fórmula: Valor * (1+i)**t
    * Aporte: 3 reais por dia


    1. Converter o tempo em termos da unidade temporal da taxa
    2. Aplicar a fórmula
*/
const convertedTime = timeConverter(3, "months", "years")
const finalValue = calculateCompoundAmount(500, 12, convertedTime)
console.log(finalValue)


// For testing
export {timeConverter}