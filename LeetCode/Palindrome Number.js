/*

정수가 주어지면 회문 정수인 경우 x를 반환 합니다.
정수는 정방향과 역방향이 같을 때 회문 입니다.

ex)  x = 121  return = true
     x = -121 return = false
     x = 10   return = false

*/

var isPalindrome = function (x) {
  return x == x.toString().split("").reverse().join("");
};
