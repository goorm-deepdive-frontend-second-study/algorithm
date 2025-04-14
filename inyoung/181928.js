//이어 붙인 수

function solution(num_list) {
  var answer = 0;
  let oddNum = "";
  let evenNum = "";

  for(let i = 0; i < num_list.length; i++){
    if (num_list[i] % 2 === 0){
      evenNum += num_list[i];
    } else {
      oddNum += num_list[i];
    }
  }

  answer = Number(oddNum) + Number(evenNum);
  return answer;
}