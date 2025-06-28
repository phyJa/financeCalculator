import {expect, test} from "bun:test"
import {timeConverter} from "./test.js"

test("2 + 2 = 4", ()=> {
    expect(2+2).toBe(4)
})

// Testing
test("importTesting", () => {
    expect(timeConverter(2, "years", "months")).toBe(24)
})