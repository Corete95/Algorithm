/*

로마수는 7가지 심볼로 표현됩니다. I, V, X, L, C, D, M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

예를들면, 2는 II이며, 12는 XII (X + II), 27은 XXVII (X + V + II).  \\ 로마수는 보통 큰값에서 작은값으로 왼쪽에서부터 오른쪽으로 씁니다.

그러나 4는 IIII가 아닙니다. 대신, 4는 IV를 사용합니다. 왜냐하면 4는 5에서 1을 빼도 되기때문입니다. 이런 원칙은 9에도 적용됩니다(IX)

다음에 6가지 빼기 예시가 있습니다.

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

로마수가 주어졌을때, 정수로 변환하시오.

*/

var romanToInt = function (s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  let str = s.split("");
  for (let i = 0; i < str.length; i++) {
    let ing = roman[str[i]];
    let next = roman[str[i + 1]];

    ing < next ? ((total += next - ing), i++) : (total += ing);
  }
  return total;
};
