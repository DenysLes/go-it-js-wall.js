let wall = [
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [3, 4],
  [3, 1, 2],
  [1, 3, 3, 1],
];

const leastBricks = function (wall) {
  const map = {};
  let maxUnbroken = 0;
  wall.forEach(row =>
    row.reduce((acc, brick) => {
      map[acc] = 1 + (map[acc] || 0);
      //   console.log(map[acc]);
      maxUnbroken = Math.max(maxUnbroken, map[acc]);
      return acc + brick;
    }),
  );
  return wall.length - maxUnbroken;
};
console.log(leastBricks(wall));
