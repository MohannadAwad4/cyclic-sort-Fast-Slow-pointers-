function findErrorNums (nums) {
    for (let i = 0; i < nums.length; i++) {
      while (nums[i] !== i + 1) {
        const correctIndex = nums[i] - 1;
        if (nums[i] === nums[correctIndex]) {
          break; // 
        }
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]; // Swap
      }
    }
  
    let duplicate=0;
    let missing =0;
    console.log("duplicate: ",duplicate)
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        duplicate = nums[i]; // Found the number that occurs twice
        missing = i + 1; // Missing number is the expected value at this index
        break;
      }
    }
  
    return [duplicate, missing];
  };
  
  console.log(findErrorNums(1,2,2,4))
  module.exports=findErrorNums