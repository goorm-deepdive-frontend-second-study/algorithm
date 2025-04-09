// 3. 181890

// 특정값이 있는지 없는지 찾으려면 indexOf(index값) 또는 include(true, false)

const str_list = ["u", "u", "l", "d", "a"];

function solution(str_list){
  const lIndex = str_list.indexOf("l");
  const rIndex = str_list.indexOf("r");

  if(lIndex !== -1 && rIndex !== -1) {
    if (lIndex < rIndex) {
      return str_list.slice(0, lIndex)
    } else if(lIndex > rIndex) {
      return str_list.slice(rIndex + 1)
    }
  } else if(lIndex !== -1) {
    return str_list.slice(0, lIndex)
  } else if(rIndex !== -1) {
    return str_list.slice(rIndex + 1)
  } else {
    return [];
  }
}

solution(str_list);