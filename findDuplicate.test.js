const findDuplicate = require("./findDuplicate")


describe("this function Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.There is only one repeated number in nums, return this repeated number.",()=>{
    test("findDuplicate([1,3,4,2,2])=>2",()=>{
        expect(findDuplicate([1,3,4,2,2])).toEqual(2);
    })
    test("findDuplicate([3,1,3,4,2])=>3",()=>{
        expect(findDuplicate([3,1,3,4,2])).toEqual(3);
    })
})