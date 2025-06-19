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

function calcOnTime(initialAmount, periodicValue, tax, time, considerLastValue) {
    
    let finalValue = calculateCompoundAmount(initialAmount, tax, time)

    for (let i = time - 1; i >= 0; i--)
        finalValue += calculateCompoundAmount(periodicValue, tax, i)
    
    if(considerLastValue === "yes") 
        return finalValue
     else
        return finalValue - periodicValue

}

function test () {
    const principalSum = document.getElementById("principalSum").value
    const periodicValue = document.getElementById("periodicValue").value
    const tax = document.getElementById("tax").value
    const time = document.getElementById("time").value
    const lastValue = document.getElementById("lastValue").value
    const answer = document.getElementById("answer")
    answer.innerHTML = `Your value is: ` + calcOnTime(principalSum, periodicValue, tax, time, lastValue).toFixed(2)
}

