/*

리스트에 있는 숫자들의 평균을 구하는 프로그램을 만들어라.

[4, 6, 8] = 6
[11, 17, 20, 24] = 18
[26, 33, 45, 51, 60] = 43

평균 : 자료의 값의 총합을 자료의 개수로 나눈 값

*/

function solution(number) {
  return number.reduce((a, b) => a + b) / number.length;
}
