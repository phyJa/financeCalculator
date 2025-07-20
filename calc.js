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


const answerParagraph = document.getElementById("answer")

let elements = [
    {
        name: "principalSum",
        element: document.getElementById("principalSum"),
        value: document.getElementById("principalSum").value
    },
    {
        name: "periodicValue",
        element: document.getElementById("periodicValue"),
        value: document.getElementById("periodicValue").value
    },
    {
        name: "timeUnitForPeriodicValue",
        element: document.getElementById("timeUnitForPeriodicValue"),
        value: document.getElementById("timeUnitForPeriodicValue").value
    },
    {
        name: "tax",
        element: document.getElementById("tax"),
        value: document.getElementById("tax").value
    },
    {
        name: "timeUnitForTax",
        element: document.getElementById("timeUnitForTax"),
        value: document.getElementById("timeUnitForTax").value
    },
    {
        name: "time",
        element: document.getElementById("time"),
        value: document.getElementById("time").value
    },
    {
        name: "timeUnitForTime",
        element: document.getElementById("timeUnitForTime"),
        value: document.getElementById("timeUnitForTime").value
    },
    {
        name: "lastValue",
        element: document.getElementById("lastValue"),
        value: document.getElementById("lastValue").value
    }
]


for (let i = 0; i < elements.length; i++) {

    elements[i].element.addEventListener(
        
        "input", (event) => {

            elements[i].value = event.target.value

            answerParagraph.innerHTML = calcOnTime(
                ...elements.map(
                    (element) => element.value
                )
            ) 
        }
    )
}

    

// Uncomment only when testing the pure functions (bun)
// export {timeConverter, calcOnTime}