/*

주어진 문자열(공백 없이 쉼표로 구분되어 있음)을 가지고 아래 문제에 대한 프로그램을 작성하세요.

[이유덕,이재영,권종표,이재영,박민호,강상희,이재영,김지완,최승혁,이성연,박영서,박민호,전경헌,송정환,김재성,이유덕,전경헌]

1. 김씨와 이씨는 각각 몇 명 인가요?
2. "이재영"이란 이름이 몇 번 반복되나요?
3. 중복을 제거한 이름을 출력하세요.
4. 중복을 제거한 이름을 오름차순으로 정렬하여 출력하세요.

*/

function solution1(name) {
  let lee = 0;
  let kim = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i][0] == "이") lee++;
    if (name[i][0] == "김") kim++;
  }
  return "김씨: " + kim + "명" + " 이씨: " + lee + "명";
}

function solution2(name) {
  let count = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] === "이재영") count++;
  }
  return "이재영은 " + count + "명";
}

function solution34(name) {
  let people = [...new Set(name)];
  let sort = people.sort();
}
