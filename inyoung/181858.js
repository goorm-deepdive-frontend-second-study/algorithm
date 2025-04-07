function solution(arr, k) {
  var answer = [];
  var reduplication = new Set();
  
  for (let num of arr) {
      if (!reduplication.has(num)) {
          reduplication.add(num);
          answer.push(num);
      }
      
      if (answer.length === k){
          break;
      }
  }
  while (answer.length < k) {
      answer.push(-1);
  }
  
  return answer;
}