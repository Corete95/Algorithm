/*

임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

ex)   n = 121   return = 144
      n = 3     return  = -1

*/

function solution(n) {
  let num = Math.sqrt(n);
  if (num % 1 === 0) return (num + 1) * (num + 1);
  else return -1;
}
