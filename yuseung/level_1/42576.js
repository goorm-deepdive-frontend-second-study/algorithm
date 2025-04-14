/**
 * 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
 * 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
 * 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
 * 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
 * 
 * 제한사항
 * 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
 * completion의 길이는 participant의 길이보다 1 작습니다.
 * 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
 * 참가자 중에는 동명이인이 있을 수 있습니다.
 */

// 효율성 테스트 면에서 실패를 하게 됨
// 이유는 forEach 문에서 indexOf를 진행하게 되면 최악의 경우 O(n^2)이 될 것이기 때문이라고 생각
function solution(participant, completion) {
  completion.forEach(c => {
    const location = participant.indexOf(c);
    participant.splice(location, 1);
  })
  return participant[0];
}

// 문제 해결을 위한 다른 풀이 방법 (gpt version)
function solution(participant, completion) {
  const map = {};

  // 참가자 이름 개수 세기
  for (const name of participant) {
    map[name] = (map[name] || 0) + 1;
  }

  // 완주자 이름 개수 차감
  for (const name of completion) {
    map[name] -= 1;
  }

  // 값이 1인 이름이 완주하지 못한 사람
  for (const name in map) {
    if (map[name] > 0) {
      return name;
    }
  }
}

// 좋아요가 많은 다른 사람의 풀이
// gpt version의 한줄 풀이라고 보면 될 듯
var solution = (participant, completion) => participant.find(p => !completion[p]--, completion.map(c => completion[c] = (completion[c] | 0) + 1))