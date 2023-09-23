export function getRandomImageUrl(width: number = 3000, height: number = 2000) {
  return `https://picsum.photos/id/${getRandomArbitrary(
    772,
    791,
  )}/${width}/${height}`;
}

function getRandomArbitrary(min: number, max: number) {
  return Math.trunc(Math.random() * (max - min) + min);
}
