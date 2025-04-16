// 뒤에서 5등 위로

const num_list = [12, 4, 15, 46, 38, 1, 14, 56, 32, 10];

function solution(num_list){
  const newList = num_list.sort((a, b) => a - b).slice(5);
  return newList;
};

console.log(solution(num_list));
