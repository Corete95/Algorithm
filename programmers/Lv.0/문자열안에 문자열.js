/*

문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

ex)  str1="ab6CDE443fgh22iJKlmn1o"	str2="6CD"	  result=1
     str1="ppprrrogrammers"	        str2="pppp"	  result=2
     str1="AbcAbcA"	                str2="AAA"	  result=2

*/

function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}
