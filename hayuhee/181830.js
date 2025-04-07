// 2. 정사각형으로 만들기

function solution(arr) {
  const arr_rows = arr.length;
  const maxCol = Math.max( ...arr.map(row => row.length) ); // 가장 긴 열 구허고 각 행의 열 개수 배열로! 
  const maxSize = Math.max(arr_rows, maxCol) // 정사각형 만들 기준 사이즈

  for(let i = 0; i < arr.length; i++){

    const diff = maxSize - arr[i].length;
    if(diff > 0) {
      arr[i] = arr[i].concat(Array(diff).fill(0));
    }
  }

  while(arr.length < maxSize) {
    arr.push(Array(maxSize).fill(0));
  }

  return arr;
}

console.log(solution([[1, 2, 5], [3, 4], [1, 2, 3, 4]]));