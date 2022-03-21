/*

A씨는 게시판 프로그램을 작성하고 있다.
A씨는 게시물의 총 건수와 한 페이지에 보여줄 게시물수를 입력으로 주었을 때 총 페이지수를 리턴하는 프로그램이 필요하다고 한다.

입력 : 총건수(m), 한페이지에 보여줄 게시물수(n) (단 n은 1보다 크거나 같다. n >= 1)
출력 : 총페이지수

*/

function solution(m, n) {
  return Math.ceil(m / n);
}

function solution(m, n) {
  let total_page = 0;

  total_page = parseInt(m / n);
  if (total_page > 0) total_page += 1;

  return total_page;
}
