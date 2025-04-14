// 이어 붙인 수
const num_list = [3, 4, 5, 2, 1];

function solution(num_list) {
  const odd = Number(num_list.filter(n => n % 2 !== 0).join(""));
  const even = Number(num_list.filter(n => n % 2 === 0).join(""));
  return odd + even;
}

solution(num_list);

console.log(solution([3, 4, 5, 2, 1]));