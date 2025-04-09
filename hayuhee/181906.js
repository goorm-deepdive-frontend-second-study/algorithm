// 2. 접두사인지 확인하기

// startsWith()는 어떤 문자열이 특정 문자열로 시작하는지(true/false)를 확인해주는 함수입니다.

const my_string = "banana";
const is_prefix = "bnana";


function solution(my_string, is_prefix){
  return my_string.startsWith(is_prefix) ? 1 : 0;
}

solution(my_string, is_prefix);