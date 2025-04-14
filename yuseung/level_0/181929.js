// 원소들의 곱과 합
function solution(num_list) {
  let com1 = num_list.reduce((acc, cur) => acc * cur, 1);
  let com2 = Math.pow(num_list.reduce((acc, cur) => acc + cur, 0), 2);

  return com1 < com2 ? 1 : 0;
}