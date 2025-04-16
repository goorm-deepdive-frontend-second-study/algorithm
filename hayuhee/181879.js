// 길이에 따른 연산
const num_list = [3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1];

function solution(num_list){
    if (num_list.length >= 11) {
      return num_list.reduce((num, cur) => num + cur, 0);
    } else {
      return num_list.reduce((num, cur) => num * cur, 1);
    };
};

console.log(solution(num_list));