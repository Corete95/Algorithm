/*

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

ex) a = 3 , b = 5  / 12
    a = 3 , b = 3  / 3
    a = 5 , b = 3  / 12

*/

function solution(a, b) {
  let answer = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  }

  return answer;
}

// Math.max,min 메서드를 활용해서 간단한 풀이 가능
function solution1(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  let answer = 0;
  for (let i = min; i <= max; i++) {
    answer += i;
  }

  return answer;
}
