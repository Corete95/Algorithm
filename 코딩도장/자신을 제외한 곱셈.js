/*

배열 [a, b, c, d]를 입력하면 배열[bcd, acd, abd, abc]를 출력하는 코드를 작성하시오.

(단, 나눗셈 사용 금지)

입출력되는 배열은 어떤 형식이든 상관없습니다.

ex)       s = [2,6,4,7]
     return = [168,56,84,48]

*/

function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    let multi = 1;
    for (let j = 0; j < s.length; j++) {
      if (s[i] !== s[j]) {
        multi *= s[j];
      }
    }
    answer.push(multi);
  }
  return answer;
}
