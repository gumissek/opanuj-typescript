export function helloWorld(): string {
  return 'Hello, World!';
}


export function getOddNumbersUpTo(n: number): number[] {
  const oddNumbers: number[] = [];
  for (let i = 1; i<=n; i+=1){
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
  return oddNumbers;
}

export function sumArray(arr : number[]){
  return arr.reduce((red, curr) => red + curr);
}

const n : number = 5;

let oddNumbers : number[] | [] = getOddNumbersUpTo(n);

console.log(oddNumbers)

const sumOddNumbers = sumArray(oddNumbers);
console.log(sumOddNumbers)
