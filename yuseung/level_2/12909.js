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