export function knightTravails(start, end, size) {
  if (!isValid(start, end, size)) throw new Error("incorrect arguments");
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
      if (newX >= 0 && newX < size && newY >= 0 && newY < size && !visited.has(`${newX},${newY}`)) {
        queue.push([[newX, newY], path.concat([[newX, newY]])]);
        visited.add(`${newX},${newY}`);
      }
    }
  }
  return null;
}

function isValid(start, end, size) {
  if (
    start[0] < 0 ||
    start[0] >= size ||
    start[1] < 0 ||
    start[1] >= size ||
    end[0] < 0 ||
    end[0] >= size ||
    end[1] < 0 ||
    end[1] >= size
  )
    return false;
  return true;
}