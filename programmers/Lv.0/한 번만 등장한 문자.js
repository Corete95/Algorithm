/*

문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 
한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.


ex)   s = "abcabcadc"  result = "d"
      s = "abdc"       result = "abdc"
      s = "hello"      result = "eho"

*/

function solution(s) {
  let arr = [...s];
  return arr
    .filter((a) => arr.filter((b) => a === b).length === 1)
    .sort()
    .join("");
}

function solution(s) {
  let arr = [];

  [...s].forEach((item) => {
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      arr.push(item);
    }
  });

  return arr.sort().join("");
}
