// 등차수열의 특정한 항만 더하기
const a = 3;
const d = 4;
const included = [true, false, false, true, true];

function solution(a, d, included) {
  let sum = 0;

  for(let i = 0; i < included.length; i++) {
    let term = a + d * i;
    if(included[i]) {
      sum += term;
    }
  }

  return sum
}

solution(a, d, included);

console.log(solution(a, d, included)); 