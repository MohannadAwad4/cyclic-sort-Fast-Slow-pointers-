function findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];
  
    // Move slow pointer by one step and fast pointer by two steps
    do {
      slow = nums[slow];
      fast = nums[nums[fast]];
    } while (slow !== fast);
  
    // Find the intersection point of the two pointers
    slow = nums[0];
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
    }
  
    // Return the repeated number
    return slow;
  }
  module.exports=findDuplicate