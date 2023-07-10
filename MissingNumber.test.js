
const MissingNumber=require("./MissingNumber")

describe("Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array",()=>{
test("missingNumber([3,0,1])=>2",()=>{
    expect(MissingNumber([3,0,1])).toBe(2)
})

test("missingNumber([9,6,4,2,3,5,7,0,1])=>8",()=>{
    expect(MissingNumber([9,6,4,2,3,5,7,0,1])).toBe(8)
})

})
