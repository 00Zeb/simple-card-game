const RANKS = '23456789TJQKA';

module.exports = (steve, josh) => {
  if (steve.length === 0) return 'Tie';
  const s = RANKS.indexOf(steve[0]);
  const j = RANKS.indexOf(josh[0]);
  if (s > j) return 'Steve wins 1 to 0';
  if (s < j) return 'Josh wins 0 to 1';
  return 'Tie';
};
