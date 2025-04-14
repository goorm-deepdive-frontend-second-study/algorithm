// 코드 처리하기
const code = "abc1abc1abc"

function solution(code) {
  let mode = 0;
  const ret = [];

  for(let i = 0; i < code.length; i++) {
    if(code[i] === "1") {
      if(mode === 0) {
        mode = 1;
      } else {
        mode = 0;
      }
    } else {
      if(mode === 0 && i % 2 === 0) {
        ret.push(code[i]);
      } else if(mode === 1 && i % 2 !== 0) {
        ret.push(code[i]);
      }
    }
  }

  return ret.length === 0 ? "EMPTY" : ret.join("");
}
solution(code);

console.log(solution("abc1abc1abc"));