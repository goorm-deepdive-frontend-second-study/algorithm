function solution(a, b) {
  var answer = 0;
  const ab = Number(String(a) + String(b));
  const ba = Number(String(b) + String(a));
  
  answer = ab >= ba ? ab : ba;
  return answer;
}