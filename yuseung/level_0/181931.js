// 등차수열의 특정한 항만 더하기
function solution(a, d, included) {
  return included.reduce((answer, v, idx) => {
    return answer + (v ? a + d * idx : 0)
  }, 0)
}