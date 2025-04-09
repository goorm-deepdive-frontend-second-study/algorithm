// 1. 리스트 자르기
const slicer = 	[1, 5, 2];
const num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function solution(n, slicer, num_list){
  const [a, b, c] = [...slicer];

  switch(n) {
    case 1 :
      return num_list.slice(1, b + 1);
    case 2 :
      return num_list.slice(a);
    case 3 :
      return num_list.slice(a, b + 1);
    case 4 :{
      const sliced = num_list.slice(a, b + 1);
      const result = [];

      for(let i = 0; i < sliced.length; i += c) {
        result.push(sliced[i]);
      }
      
      return result;
    }

    default: return [];
  }
}

solution(1, slicer, num_list);

console.log(solution(1, slicer, num_list)); // case 1: [2, 3, 4, 5, 6]
console.log(solution(2, slicer, num_list)); // case 2: [2, 3, 4, 5, 6, 7, 8, 9]
console.log(solution(3, slicer, num_list)); // case 3: [2, 3, 4, 5, 6]
console.log(solution(4, slicer, num_list)); // case 4: [2, 4, 6]