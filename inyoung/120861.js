function solution(keyinput, board) {
    
  let x = 0;
  let y = 0;
  
  const move = {
      "left" : [-1, 0],
      "right" : [1, 0],
      "up" : [0, 1],
      "down" : [0, -1]
  };
  
  const xLimit = Math.floor(board[0] / 2);
  const yLimit = Math.floor(board[1] / 2);
  
  for (let key of keyinput) {
      const [dx, dy] = move[key];
      const newX = x + dx;
      const newY = y + dy;
      
       if (Math.abs(newX) <= xLimit && Math.abs(newY) <= yLimit) {
          x = newX;
          y = newY;
      }
  }

  var answer = [x, y];
  return answer;
}