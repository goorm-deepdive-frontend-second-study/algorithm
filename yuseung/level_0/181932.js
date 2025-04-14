// 코드 처리하기
function solution(code) {
  let mode = false;
  let ret = "";
  code.split('').forEach((c, idx) => {
    if (c === "1") mode = !mode;
    else {
      if (mode === false && idx % 2 === 0) {
        ret += c;
      }
      if (mode === true && idx % 2 === 1) {
        ret += c;
      }
    }
  });

  return ret === "" ? "EMPTY" : ret;
}