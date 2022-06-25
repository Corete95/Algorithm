/* 문자열 한 줄이 주어졌을 때, 해당 줄에 몇 개의 영단어가 존재하는지 계산하는 프로그램을 작성하시오.
문자열은 알파벳 대/소문자 및 공백으로 구성되어 있으며,공백없이 하나 이상의 알파벳이 연속된 부분 문자열(Substring)을 단어(Word)로 정의한다.
예를 들어서 문자열 "Goorm  Eud"의 경우 "Goorm","Eud"가 존재한다.

ex)  string = "Goorm  Eud"       return = 2
     string = " goo r m e du"    return = 5

*/

function solution(string) {
  return string.split(" ").length - 1;
}

function solution1(string) {
  const pattern = /\s/g;

  return string.match(pattern).length;
}
