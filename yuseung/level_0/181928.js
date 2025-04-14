// 이어 붙인 수
function solution(num_list) {
  let com1 = Number(num_list.reduce((acc, cur) => {
    if (cur % 2 === 0) return String(acc) + String(cur);
    else return acc;
  }, 0))

  let com2 = Number(num_list.reduce((acc, cur) => {
    if (cur % 2 !== 0) return String(acc) + String(cur);
    else return acc;
  }, 0))

  return com1 + com2;
}