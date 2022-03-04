/*
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

ex) n = 123   return = 6
    n = 987   return = 24

*/

function solution(n) {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
}
