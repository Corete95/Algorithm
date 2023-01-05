/*

문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

ex) my_str="abc1Addfggg4556b"	n=6	  result=["abc1Ad", "dfggg4", "556b"]
    my_str="abcdef123"	        n=3	  result=["abc", "def", "123"]

*/

function solution(my_str, n) {
  let answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.substr(i, n));
  }
  return answer;
}
