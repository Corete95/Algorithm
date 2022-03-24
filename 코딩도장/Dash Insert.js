/*

DashInsert 함수는 숫자로 구성된 문자열을 입력받은 뒤, 문자열 내에서 홀수가 연속되면 두 수 사이에 - 를 추가하고, 짝수가 연속되면 * 를 추가하는 기능을 갖고 있다. 
(예, 454 => 454, 4546793 => 454*67-9-3) DashInsert 함수를 완성하자.

입력 = "4546793"
출력 = "454*67-9-3"

*/

function solution(number) {
  let answer = "";
  for (let i = 0; i < number.length; i++) {
    answer += number[i];
    if (number[i] % 2 === 0 && number[i + 1] % 2 === 0) {
      answer += "*";
    } else if (number[i] % 2 === 1 && number[i + 1] % 2 === 1) {
      answer += "-";
    }
  }
  return answer;
}
