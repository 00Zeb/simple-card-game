const RANKS = '23456789TJQKA';

module.exports = (steve, josh) => {
  let steveScore = 0;
  let joshScore = 0;

  for (let i = 0; i < steve.length; i++) {
    const s = RANKS.indexOf(steve[i]);
    const j = RANKS.indexOf(josh[i]);
    if (s > j) steveScore++;
    else if (s < j) joshScore++;
  }

  if (steveScore > joshScore) return `Steve wins ${steveScore} to ${joshScore}`;
  if (steveScore < joshScore) return `Josh wins ${steveScore} to ${joshScore}`;
  return 'Tie';
};
