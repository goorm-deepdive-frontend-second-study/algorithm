/**
 * 2025-04-09
 * 올바른 괄호
 * 60,755명	79%
 * 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 
 * 예를 들어
 *    "()()" 또는 "(())()" 는 올바른 괄호입니다.
 *    ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
 * '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 
 * 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한사항
 * 문자열 s의 길이 : 100,000 이하의 자연수
 * 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
 */

const solution = (s) => {
  const stack = [];
  for (h of [...s]) {
    if (h === '(') stack.push(h);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  if (stack.length !== 0) return false;
  return true;
}

// 숫자를 이용한 다른 사람의 풀이
// function solution(s) {
//   let cum = 0
//   for (let paren of s) {
//     cum += paren === '(' ? 1 : -1
//     if (cum < 0) {
//       return false
//     }
//   }
//   return cum === 0 ? true : false;
// }