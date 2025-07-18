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


function numberIsInteger(num) {
    if(num % 1 === 0)
        return true
    else
        return false
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

    let counter = 0
    let isInteger
    
    for (
            let i = timeConverter(time, timeUnitForTime, timeUnitForPeriodicValue) - 1;
            i >= 0; 
            i--
        ) 
        {
            isInteger = numberIsInteger(i)
            counter++
            finalValue += calculateCompoundAmount(
                periodicValue, 
                tax, 
                timeConverter(i, timeUnitForPeriodicValue, timeUnitForTax)
            )
        }
        
    if(considerLastValue === "yes" || counter === 0 || !isInteger) 
        return finalValue
    else
        return finalValue - periodicValue

}

    // Grabbing elements
    const principalSum = document.getElementById("principalSum")
    // Periodic value and its time unit
    const periodicValue = document.getElementById("periodicValue")
    const timeUnitForPeriodicValue = document.getElementById("timeUnitForPeriodicValue")
    // Tax and its time unit
    const tax = document.getElementById("tax")
    const timeUnitForTax = document.getElementById("timeUnitForTax")
    // Time and its time unit
    const time = document.getElementById("time")
    const timeUnitForTime = document.getElementById("timeUnitForTime")
    // Last value
    const lastValue = document.getElementById("lastValue")
    // Answer container
    const answerParagraph = document.getElementById("answer")


    let elements = [
        principalSum,
        periodicValue,
        timeUnitForPeriodicValue,
        tax,
        timeUnitForTax,
        time,
        timeUnitForTime,
        lastValue
    ]

    let elementsNames = [
        "principalSum",
        "periodicValue",
        "timeUnitForPeriodicValue",
        "tax",
        "timeUnitForTax",
        "time",
        "timeUnitForTime",
        "lastValue"
    ]

    // Values
    let values = {
        principalSumValue: principalSum.value,
        periodicValue: periodicValue.value,
        timeUnitForPeriodicValueValue: timeUnitForPeriodicValue.value,
        taxValue: tax.value,
        timeUnitForTaxValue: timeUnitForTax.value,
        timeValue: time.value,
        timeUnitForTimeValue: timeUnitForTime.value,
        lastValueValue: lastValue.value
    }



    for (let i = 0; i < elements.length; i++) {

        elements[i].addEventListener(
            
            "input", (event) => {

                values[`${elementsNames[i]}Value`] = event.target.value

                answerParagraph.innerHTML = calcOnTime(
                    values.principalSumValue,
                    values.periodicValue,
                    values.timeUnitForPeriodicValueValue,
                    values.taxValue,
                    values.timeUnitForTaxValue,
                    values.timeValue,
                    values.timeUnitForTimeValue,
                    values.lastValueValue
                ) 
            }
        )
    }

    

// Uncomment only when testing the pure functions (bun)
// export {timeConverter, calcOnTime}