const findDuplicates=require("./findAllDup")
describe("Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.",()=>{
    test("findDuplicates([4,3,2,7,8,2,3,1])=>[3,2]",()=>{
        expect(findDuplicates([4,3,2,7,8,2,3,1])).toEqual([3,2])
    })
    test("findDuplicates([1,1,2])=>[1]",()=>{
        expect(findDuplicates([1,1,2])).toEqual([1])
    })
})