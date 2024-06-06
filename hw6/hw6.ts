async function isPrimeWithAsyncAwait(n: number): Promise<boolean> {
  const isPrime = await new Promise<boolean>((resolve) => {
    setTimeout(() => {
      if (n <= 1) {
        resolve(false);
      } else if (n <= 3) {
        resolve(true);
      } else if (n % 2 === 0 || n % 3 === 0) {
        resolve(false);
      } else {
        for (let i = 5; i * i <= n; i += 6) {
          if (n % i === 0 || n % (i + 2) === 0) {
            resolve(false);
            return;
          }
        }
        resolve(true);
      }
    }, 1000);
  });

  return isPrime;
}

isPrimeWithAsyncAwait(29).then((result) => {
  console.log(`29 có phải là số nguyên tố không? ${result}`);
});

isPrimeWithAsyncAwait(15).then((result) => {
  console.log(`15 có phải là số nguyên tố không? ${result}`);
});
