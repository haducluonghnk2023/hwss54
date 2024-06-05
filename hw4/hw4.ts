function isPrimeWithPromise(num: number): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        // Kiểm tra xem tham số có phải là số nguyên không
        if (!Number.isInteger(num)) {
          throw new Error('Tham số phải là số nguyên');
        }
  
        // Trường hợp số 0 và 1 không phải là số nguyên tố
        if (num <= 1) {
          resolve(false);
          return;
        }
  
        // Kiểm tra xem số đó có phải là số nguyên tố không
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            resolve(false);
            return;
          }
        }
  
        resolve(true);
      } catch (error) {
        reject((error as Error).message);
      }
    });
  }
  
  // Sử dụng hàm isPrimeWithPromise()
  isPrimeWithPromise(7)
    .then((result) => {
      console.log(result); // true
    })
    .catch((error) => {
      console.error(`Lỗi: ${error}`);
    });