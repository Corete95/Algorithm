/*

어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

ex)  n=2  t=10    result=2048
     n=7  t=15    result=229,376

*/

function solution(n, t) {
  let answer = n;

  for (i = 0; i < t; i++) {
    answer *= 2;
  }

  return answer;
}

function solution(n, t) {
  return n * 2 ** t;
}
