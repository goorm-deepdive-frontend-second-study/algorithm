// 조건에 맞게 수열 변환하기 1
const arr = [1, 2, 3, 100, 99, 98];

function solution(arr){
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 50 && arr[i] % 2 === 0) {
      result.push(arr[i] / 2);
    } else if (arr[i] < 50 && arr[i] % 2 !== 0){
      result.push(arr[i] * 2);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(solution(arr));


// map을 쓰고싶은데 map이 이해가 잘 안됨