const removeDuplicates= require("./RemoveDup");

describe("this function should remove the duplicates in-place such that each unique element appears only once",()=>{
    test("removeDuplicate('1,1,2')=>2",()=>{
        expect(removeDuplicates([1,1,2])).toBe(2)
    })
    test("removeDuplicate('0,0,1,1,1,2,2,3,3,4']=>5",()=>{
        expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5)
    })
})