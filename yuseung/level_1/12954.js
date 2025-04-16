/**
 * x만큼 간격이 있는 n개의 숫자
 * 2025-04-16 66,452명 88%
 * 
 * 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
 * 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
 * 
 * 제한 조건
 * x는 -10000000 이상, 10000000 이하인 정수입니다.
 * n은 1000 이하인 자연수입니다.
 */

function solution(x, n) {
  let answer = [];
  for (let i = 0, num = x; i < n; i++, num += x) {
    answer.push(num);
  }
  return answer;
}

// 한 줄 풀이
const solution = (x, n) => Array(n).fill(x).map((v, i) => (i + 1) * v);