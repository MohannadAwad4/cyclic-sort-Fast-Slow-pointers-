function findDuplicates(nums) {
    const duplicates = [];
  
    let i = 0;
    while (i < nums.length) {
      const correctIndex = nums[i] - 1;
  
      // If the number is not in its correct position and it's not a duplicate
      if (nums[i] !== nums[correctIndex]) {
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
      } else {
        // If the number is in its correct position, move to the next index
        i++;
      }
    }
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        duplicates.push(nums[i]);
      }
    }
  
    return duplicates;
  }
  module.exports=findDuplicates;