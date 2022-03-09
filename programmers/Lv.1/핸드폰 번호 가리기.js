/*

프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

ex)   phone_number = "01033334444"   return = "*******4444"
      phone_number = "027778888"     return = "*****8888"

*/

function solution(phone_number) {
  let result = "";
  let answer = phone_number.substr(phone_number.length - 4);
  for (i = 0; i < phone_number.length - 4; i++) {
    result += "*";
  }
  return result + answer;
}

//메서드를 이용한 풀이

function solution(phone_number) {
  let substr = phone_number.substr(phone_number.length - 4); // 뒷 4자리 짜기
  let substring = phone_number.substring(0, phone_number.length - 4); // 뒷 4자리를 제외한 앞부분 가져오기
  let result = substring.replace(/[0-9]/g, "*"); // 앞자리 * 로 바꾸기
  return result + substr;
}
