/*
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 
'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

ex)
s = "pPoooyY"  return = true
s = "Pyy"  return = false

*/

//처음 작성한 코드
function solution(s) {
  let p = s.toLowerCase().match(/p/g);
  let y = s.toLowerCase().match(/y/g);
  return p.length === y.length ? true : false;
}

//수정코드
function solution(s) {
  let p = s.toLowerCase().match(/p/g);
  let y = s.toLowerCase().match(/y/g);
  if (p === null) p = [];
  if (y === null) y = [];
  return p.length === y.length ? true : false;
}

/*
처음 작성한 코드는 4문제 런타임 오류가 떴다.
이유가 무엇인지 찾다 보니 p, y 값이 없을 때는 null 값을 받는다.
그래서 삼항연산자에서 에러가 나기 때문에 null이면 빈 배열로 처리를 해줬다.
*/