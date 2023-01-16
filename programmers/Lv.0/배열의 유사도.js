/*

두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

ex)  s1 = ["a", "b", "c"]   s2 = ["com", "b", "d", "p", "c"]	result = 2
     s1 = ["n", "omg"]	    s2 = ["m", "dot"]	                result = 0

*/

function solution(s1, s2) {
  return s1.filter((x) => s2.includes(x)).length;
}

function solution(s1, s2) {
  const integration = [...s1, ...s2];
  const result = [...new Set(integration)];
  return integration.length - result.length;
}
