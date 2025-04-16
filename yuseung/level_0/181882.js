function solution(arr) {
  arr.forEach((num, i) => {
    if (num < 50 && num % 2) arr[i] *= 2;
    else if (num >= 50 && !(num % 2)) arr[i] /= 2;
  })
  return arr;
}