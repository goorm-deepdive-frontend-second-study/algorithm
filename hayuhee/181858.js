// 1. 무작위로 K개의 수 뽑기

function solution(arr, k) {
  let newArr = Array.from(new Set(arr));

  if (newArr.length < k) {
    const diff = k - newArr.length;
    newArr = newArr.concat(Array(diff).fill(-1));
  }

  return newArr;
}

console.log(solution([0, 1, 1, 2, 2, 3], 2));