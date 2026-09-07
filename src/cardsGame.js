const RANK = { A: 14, K: 13 };

module.exports = (steve, josh) => {
  if (steve.length === 0) return 'Tie';
  const s = RANK[steve[0]];
  const j = RANK[josh[0]];
  if (s > j) return 'Steve wins 1 to 0';
  if (s < j) return 'Josh wins 0 to 1';
  return 'Tie';
};
