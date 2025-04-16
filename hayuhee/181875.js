// 배열에서 문자열 대소문자 변환하기

const strArr = ["AAA","BBB","CCC","DDD"];

function solution(strArr) {
  const txtArr = strArr.map((txt, index) => {
    if((index + 1) % 2 === 0) {
      return txt.toUpperCase();
    } else {
      return txt.toLowerCase();
    }
  })
  return txtArr;
};

console.log(solution(strArr));