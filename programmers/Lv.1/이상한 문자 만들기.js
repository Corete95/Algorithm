/*

문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

ex)  s = "try hello world"    return = "TrY HeLlO WoRlD"

"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 
각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.


*/

function solution(s) {
  let strArr = s.split(" ");
  return strArr
    .map((el) => {
      let answer = "";
      for (let i = 0; i < el.length; i++) {
        i % 2 === 0
          ? (answer += el[i].toUpperCase())
          : (answer += el[i].toLowerCase());
      }
      return answer;
    })
    .join(" ");
}
