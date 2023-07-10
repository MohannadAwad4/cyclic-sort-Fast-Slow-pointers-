function missingNumber(nums) {
    const n = nums.length;
  
    // Cyclic sorting
    for (let i = 0; i < n; i++) {
      while (nums[i] !== i && nums[i] < n) {
        // Swap the number to its correct position
        const temp = nums[i];
        nums[i] = nums[temp];
        nums[temp] = temp;
      }
    }
  
    // Find the missing number
    for (let i = 0; i < n; i++) {
      if (nums[i] !== i) {
        return i;
      }
    }
  
    // If no missing number found, return n
    return n;
  }
  module.exports=missingNumber;