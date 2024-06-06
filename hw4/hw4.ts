async function sumWithAsyncAwait(numbers: number[]): Promise<number> {
  const sum = await new Promise<number>((resolve) => {
    setTimeout(() => {
      const result = numbers.reduce((acc, curr) => acc + curr, 0);
      resolve(result);
    }, 1000);
  });

  return sum;
}

sumWithAsyncAwait([1, 2, 3, 4, 5]).then((result) => {
  console.log(`Tổng của các số trong mảng là: ${result}`);
});
