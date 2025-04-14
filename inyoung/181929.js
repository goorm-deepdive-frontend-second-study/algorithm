//원소들의 곱과 합

function solution(num_list) {

  let product = 1;
  for (let i = 0; i < num_list.length; i++) {
      product *= num_list[i];
  }

  let sum = 0;
  for (let i = 0; i < num_list.length; i++) {
      sum += num_list[i];
  }

  if (product < sum * sum) {
      return 1;
  } else {
      return 0;
  }
}
