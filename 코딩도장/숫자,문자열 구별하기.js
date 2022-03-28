/*

문자와 숫자가섞인 문자열을 입력받을때 구별하여출력해라

ex)  input = "c910m6ia 1ho"
    return = str : cma ho
             int : 91061

*/

function solution(input) {
  let answer = input.split("");
  let str = "";
  let int = "";
  for (value of answer) {
    if (isNaN(value) || b == " ") {
      str += value;
    } else {
      int += value;
    }
  }
  return `str:${str} // int:${int}`;
}

function solution(input) {
  let int = input.match(/\d/g).join("");
  let str = input.match(/[^\d]/g).join("");

  return `str:${str} // int:${int}`;
}
