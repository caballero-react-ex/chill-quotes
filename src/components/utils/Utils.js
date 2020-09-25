export function shuffleArray(array) {
  const shuffled = array.sort(()=>  {
    return .5 - Math.random();
  });
  return shuffled; 
};