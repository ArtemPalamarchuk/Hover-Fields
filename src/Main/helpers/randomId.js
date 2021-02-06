const digitsRange = {from: 48, to: 58};
const latinUpperRange = {from: 65, to: 91};
const latinLowerRange = {from: 97, to: 123};

const randomNumberFromTo = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateRandomSymbols = () => {
  const ranges = [digitsRange, latinUpperRange, latinLowerRange];
  const randomRange = ranges[Math.floor(Math.random()*ranges.length)];
  return ranges.map(el => String.fromCharCode(randomNumberFromTo(randomRange.from, randomRange.to))).join('');
};

export const randomId = () => {
  const timestamp = new Date().getTime().toString().split('');
  return timestamp.map(el => `${el}${generateRandomSymbols()}`).join('');
};

