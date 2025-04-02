function solution(number, n, m) {
  if(number % n === 0 && number % m === 0) return 1;
  return 0;
}

console.log(solution(60, 2, 3));
console.log(solution(55, 10, 5));