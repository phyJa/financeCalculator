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

function calcOnTime(
    initialAmount, 
    periodicValue, 
    timeUnitForPeriodicValue, 
    tax,
    timeUnitForTax, 
    time, 
    timeUnitForTime,
    considerLastValue) {

    const calculateCompoundAmount = (principalSum, tax, time) => principalSum * ((1 + tax/100)**time)

    let finalValue = calculateCompoundAmount(
        initialAmount, 
        tax, 
        timeConverter(time, timeUnitForTime, timeUnitForTax))
    
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

function main() {
    // Grabbing elements
    const principalSum = document.getElementById("principalSum").value
    // Periodic value and its time unit
    const periodicValue = document.getElementById("periodicValue").value
    const timeUnitForPeriodicValue = document.getElementById("timeUnitForPeriodicValue").value
    // Tax and its time unit
    const tax = document.getElementById("tax").value
    const timeUnitForTax = document.getElementById("timeUnitForTax").value
    // Time and its time unit
    const time = document.getElementById("time").value
    const timeUnitForTime = document.getElementById("timeUnitForTime").value
    // Last value
    const lastValue = document.getElementById("lastValue").value
    // Answer container
    const answerParagraph = document.getElementById("answer")
    // Calculate answer and display it
    const answer = calcOnTime(
        principalSum, 
        periodicValue, 
        timeUnitForPeriodicValue, 
        tax,
        timeUnitForTax,
        time,
        timeUnitForTime,
        lastValue
    )
    answerParagraph.innerHTML = answer.toFixed(2)
}


// Uncomment only when testing the pure functions (bun)
// export {timeConverter, calcOnTime}