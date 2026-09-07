const RANKS = '23456789TJQKA';

module.exports = (steve, josh) => {
  if (steve.length === 0) return 'Tie';

  let steveScore = 0;
  let joshScore = 0;

  for (let i = 0; i < steve.length; i++) {
    const s = RANKS.indexOf(steve[i]);
    const j = RANKS.indexOf(josh[i]);
    if (s > j) steveScore++;
    else if (s < j) joshScore++;
  }

  if (steveScore > joshScore) return 'Steve wins 1 to 0';
  if (steveScore < joshScore) return 'Josh wins 0 to 1';
  return 'Tie';
};
