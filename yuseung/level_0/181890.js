function solution(str_list) {
  let lIndex = [...str_list].indexOf("l");
  let rIndex = [...str_list].indexOf("r");
  if (lIndex > rIndex) {
    if (rIndex < 0) return str_list.slice(0, lIndex);
    return str_list.slice(rIndex + 1);
  } else if (lIndex < rIndex) {
    if (lIndex < 0) return str_list.slice(rIndex + 1);
    return str_list.slice(0, lIndex);
  }
  return [];
}