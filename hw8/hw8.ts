function countDown(n: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let timeLeft = n;
      const intervalId = setInterval(() => {
        console.log(`Thời gian còn lại: ${timeLeft} giây`);
        timeLeft--;
  
        if (timeLeft === 0) {
          clearInterval(intervalId);
          console.log("Hoàn thành quá trình đếm");
          resolve();
        }
      }, 1000);
    });
  }
  
  // Sử dụng hàm countDown()
  countDown(5)
    .then(() => {
      console.log("Quá trình đếm ngược hoàn tất!");
    })
    .catch((error) => {
      console.error("Có lỗi xảy ra:", error);
    });