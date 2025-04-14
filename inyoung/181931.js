// 등차수열의 특정한 항만 더하기

function solution(a, d, included){
  var answer = 0;

  for(let i = 0; i < included.length; i++){
    let term = a + d * i;
    if(included[i]){
      answer += term;
    }
  }

  return answer;
}