const twoSum=require("./twoSum")
describe(" find two numbers such that they add up to a specific target number.",()=>{
    test("twoSum([2,7,11,15],9)=>[1,2]",()=>{
        expect(twoSum([2,7,11,15],9)).toEqual([1,2])
    })
    test("twoSum([2,3,4],6)=>[1,3]",()=>{
        expect(twoSum([2,3,4],6)).toEqual([1,3])
    })
})