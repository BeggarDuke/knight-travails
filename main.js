export function knightTravails(start, end) {
  const directions = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  const queue = [[start, [start]]];
  const visited = new Set();
  visited.add(`${start[0]},${start[1]}`);
  while (queue.length > 0) {
    const [position, path] = queue.shift();
    for (const direction of directions) {
      const newX = position[0] + direction[0];
      const newY = position[1] + direction[1];
      if (newX === end[0] && newY === end[1]) {
        return path.concat([[newX, newY]]);
      }
      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8 && !visited.has(`${newX},${newY}`)) {
        queue.push([[newX, newY], path.concat([[newX, newY]])]);
        visited.add(`${newX},${newY}`);
      }
    }
  }
  return null;
}