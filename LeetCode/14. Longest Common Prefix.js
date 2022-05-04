/*

문자열 배열 중에서 가장 긴 공통 접두사 문자열을 찾는 함수를 작성하십시오.

공통 접두사가 없으면 빈 문자열을 반환합니다 "".

ex)   strs = ["flower","flow","flight"]   return = "fl"
      strs = ["dog","racecar","car"]      return = ""

*/

var longestCommonPrefix = function (strs) {
  let answer = "";
  for (let i = 0; i < strs[0].length; i++) {
    let first = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== first) return answer;
    }
    answer += first;
  }
  return answer;
};
