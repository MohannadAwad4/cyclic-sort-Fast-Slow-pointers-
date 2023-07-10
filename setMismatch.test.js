
const findErrorNums=require("./setMismatch")
describe("This function should Find the number that occurs twice and the number that is missing and return them in the form of an array.",()=>{
    test("findErrorNums[1,2,2,4]=>[2,3]",()=>{
        expect(findErrorNums([1,2,2,4])).toBe([2,3])
    })
    test("findErrorNums[1,1]=>[1,2]",()=>{
        expect(findErrorNums([1,1])).toBe(1,2)
    })
})