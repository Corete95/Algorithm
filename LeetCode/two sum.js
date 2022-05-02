/*

정수 배열과 정수가 주어지면 nums 두 숫자의 인덱스를target 반환 하여 합이 .target
각 입력에 정확히 하나의 솔루션 이 있다고 가정 하고 동일한 요소를 두 번 사용하지 않을 수 있습니다 .
어떤 순서로든 답변을 반환할 수 있습니다.

ex)   nums [2,7,11,15]   target = 9  return = [0,1]
      nums [3,2,4]       target = 6  return = [1,2]  

*/

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
