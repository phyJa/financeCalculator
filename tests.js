import {expect, test} from "bun:test"
import {timeConverter, calcOnTime} from "./calc.js"


// Testing timeConverter
test("Convertion of 2 years into months", () => {
    expect(timeConverter(2, "years", "months")).toBe(24)
})

// Testing calcOnTime

test(`First test:
    - initial sum of 0 units
    - periodic value of 100 units per month
    - anual tax of 12%
    - 2 months of time
    - not considering the last deposit`, () => {
    expect(calcOnTime(0, 100, "months", 12, "years", 2, "months", "no").toFixed(2)).toBe("100.95")
})


test(`Second test:
    - initial sum of 0 units
    - periodic value of 100 units per month
    - anual tax of 12%
    - 2 months of time
    - considering the last deposit`, () => {
    expect(calcOnTime(0, 100, "months", 12, "years", 2, "months", "yes").toFixed(2)).toBe("200.95")
})


test(`Third test:
    - initial sum of 0 units
    - periodic value of 5 units per day
    - anual tax of 15%
    - 2 days of time
    - not considering the last deposit`, () => {
    expect(calcOnTime(0, 5, "days", 15, "years", 2, "days", "no").toFixed(2)).toBe("5.00")
})


test(`Fourth test:
    - initial sum of 0 units
    - periodic value of 5 units per day
    - anual tax of 15%
    - 2 days of time
    - considering the last deposit`, () => {
    expect(calcOnTime(0, 5, "days", 15, "years", 2, "days", "yes").toFixed(2)).toBe("10.00")
})



test(`following conditions:
    - initial sum of 100 units
    - periodic value of 4 units per day
    - anual tax of 12%
    - 5 months of income`, () => {
    expect(calcOnTime(100, 4, "days", 12, "years", 5, "months", "no").toFixed(2)).toBe("714.93")
})