const RANK = { A: 14, K: 13 };

module.exports = (steve, josh) => {
  if (steve.length === 0) return 'Tie';
  if (RANK[steve[0]] > RANK[josh[0]]) return 'Steve wins 1 to 0';
  return 'Tie';
};
