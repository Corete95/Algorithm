/*

연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 
정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

ex)  num = 3	total = 12	  result = [3, 4, 5]
     num = 5	total = 15	  result = [1, 2, 3, 4, 5] 
     num = 4	total = 14	  result = [2, 3, 4, 5]
     num = 5	total = 5	  result = [-1, 0, 1, 2, 3]

*/

function solution(num, total) {
  const min = Math.ceil(total / num - Math.floor(num / 2));

  return Array.from({ length: num }, (_, i) => i + min);
}
