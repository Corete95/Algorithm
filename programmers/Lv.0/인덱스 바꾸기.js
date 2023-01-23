/*

문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.


ex)   my_string = "hello"	       num1 = 1 	num2 = 2	result = "hlelo"
      my_string = "I love you"	   num1 = 3 	num2 = 6    result = "I l veoyou"

*/

function solution(my_string, num1, num2) {
  let duplication = [...my_string];
  let temp = duplication[num1];

  duplication[num1] = duplication[num2];
  duplication[num2] = temp;

  return duplication.join("");
}
