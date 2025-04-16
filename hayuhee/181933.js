// flag에 따라 다른 값 반환하기

const a = -4;
const b = 7;
const flag = false;

function solution(a, b, flag) {
  return flag ? a + b : a - b;
};

console.log(solution(a, b, flag));