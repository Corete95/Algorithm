/*

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

ex)   n = 12   return = 28
      12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.
      
      n = 5    return = 6
     5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.    

*/

function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    n % i == 0 ? (answer += i) : null;
  }
  return answer;
}
