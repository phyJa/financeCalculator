/*class compound {
    
    // Properties
    principalSum
    tax
    time
    
    compoundAmount
    compoundInterest
    
    simpleAmount
    simpleInterest

    constructor(principalSum, tax, time) {
        this.principalSum = principalSum
        this.tax = tax
        this.time = time
    }

    getCompoundAmount(){
        return this.compoundAmount
    }

    getCompoundInterest(){
        return this.compoundInterest
    }

    getSimpleAmount() {
        return this.simpleAmount
    }

    getSimpleInterest() {
        return this.simpleInterest
    }

    setCompoundAmount() {
        this.compoundAmount = this.principalSum * ((1 + this.tax/100)**this.time)
    }

    setCompoundInterest(){
        this.compoundAmount = this.principalSum * ((1 + this.tax/100)**this.time)
        this.compoundInterest = this.compoundAmount - this.principalSum
    }

    setSimpleAmount() {
        this.simpleInterest = this.principalSum * (this.tax/100) * this.time
        this.simpleAmount = this.simpleInterest + this.principalSum
    }

    setSimpleInterest(){
        this.simpleInterest = this.principalSum * (this.tax/100) * this.time
    }


}
*/
// const calculus = new compound(100, 1, 10)
// console.log(calculus.getCompoundAmount())

const calculateCompoundAmount = (principalSum, tax, time) => principalSum * ((1 + tax/100)**time)
const calculateCompoundInterest = (compoundAmount, principalSum) => compoundAmount - principalSum
const calculateSimpleAmount = (principalSum, simpleInterest) => principalSum + simpleInterest
const calculateSimpleInterest = (principalSum, tax, time) => principalSum * (tax/100) * time


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

function calcOnTime(
    initialAmount, 
    periodicValue, 
    timeUnitForPeriodicValue, 
    tax,
    timeUnitForTax, 
    time, 
    timeUnitForTime,
    considerLastValue) {
    
    /**
     * Taxa anual (13%)
     * Período de tempo de rendimento em meses (5 meses)
     * Aporte diário (4 reais)
    */

    // OK
    let finalValue = calculateCompoundAmount(
        initialAmount, 
        tax, 
        timeConverter(time, timeUnitForTime, timeUnitForTax))
    
    // Working on it
    for (
            let i = timeConverter(time, timeUnitForTime, timeUnitForPeriodicValue) - 1;
            i >= 0; 
            i--
        ) 
        {
            finalValue += calculateCompoundAmount(
                periodicValue, 
                tax, 
                timeConverter(i, timeUnitForPeriodicValue, timeUnitForTax)
            )
        }
        
    if(considerLastValue === "yes") 
        return finalValue
     else
        return finalValue - periodicValue

}
/*
function test () {

    const principalSum = document.getElementById("principalSum").value
    const periodicValue = document.getElementById("periodicValue").value
    const tax = document.getElementById("tax").value
    const time = document.getElementById("time").value
    const lastValue = document.getElementById("lastValue").value
    const answer = document.getElementById("answer")
    let finalValue = 0   
    
    if(timeUnitForPeriodicValue == timeUnitForTax && timeUnitForTax == timeUnitForTime)
        finalValue = calcOnTime(principalSum, periodicValue, tax, time, lastValue).toFixed(2)
    else
        console.log(mainConverter(tax, time, periodicValue))


    answer.innerHTML = `In the end of ${time} ${timeUnitForTime}, the total amount will be: ` + 
    finalValue
}
*/


/**
     * Capital de 100 reais
     * Taxa anual (13%)
     * Período de tempo de rendimento em meses (5 meses)
     * Aporte diário (4 reais)
*/

console.log(
    calcOnTime(
        100,
        4,
        "days",
        12,
        "years",
        5,
        "months",
        false
    )
)


// For testing
export {timeConverter, calcOnTime}