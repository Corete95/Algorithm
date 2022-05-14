/*

"OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 

문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.

"OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

ex)  ox ="OOXXOXXOOO"        return = 10
     ox ="OOXXOOXXOO"        return = 9
     ox ="OXOXOXOXOXOXOX"    return = 7
     ox ="OOOOOOOOOO"        return = 55
     ox ="OOOOXOOOOXOOOOX"   return = 30

*/

function OXQuiz(ox) {
  for (let i = 0; i < ox.length; i++) {
    let plus = 0;
    let answer = 0;
    for (let j = 0; j < ox.length; j++) {
      if (ox[j] === "O") {
        answer += 1 + plus;
        plus++;
      } else {
        plus = 0;
      }
    }
    return answer;
  }
}
