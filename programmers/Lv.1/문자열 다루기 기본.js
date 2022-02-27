/*

문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

ex) s = "a234"  false
    s = "1234"  true

*/

//처음 코드
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return !isNaN(s);
  }
  return false;
}

//수정코드
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    if (s.includes("e")) return false;
    return !isNaN(s);
  }
  return false;
}

/*

처음 코드에서 테스트 케이스 11번만 통과를 못했다.
이유를 찾아보니, js에서 e는 지수로 쓰이기 때문에 "11e2"를 문자가 아닌 숫자로 받아드린다.
그래서 e를 판단하기 위해 조건문을 추가했다.

*/
