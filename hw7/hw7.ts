function myFirstPromise(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("thanh cong!");
      }, 1000);
    });
  }
  
  // Sử dụng Promise
  myFirstPromise()
    .then((result) => {
      console.log(`Result! ${result}`);
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });