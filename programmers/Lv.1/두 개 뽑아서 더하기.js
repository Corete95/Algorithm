/*

numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

ex)   numbers = [2,1,3,4,1]   return = [2,3,4,5,6,7]
        2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
        3 = 2 + 1 입니다.
        4 = 1 + 3 입니다.
        5 = 1 + 4 = 2 + 3 입니다.
        6 = 2 + 4 입니다.
        7 = 3 + 4 입니다.
        따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
     
     numbers = [5,0,2,7]      return = [2,5,7,9,12]

*/
function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (answer.indexOf(sum) === -1) {
        answer.push(sum);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  let answerSet = [...new Set(answer)];
  return answerSet.sort((a, b) => a - b);
}
