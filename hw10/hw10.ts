function findElement(arr: number[], value: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    if (!Array.isArray(arr) || arr.some(isNaN)) {
      reject(new Error("Tham số truyền vào phải là một mảng số nguyên."));
    }

    const foundIndex = arr.findIndex((element) => element === value);
    resolve(foundIndex);
  });
}

// Sử dụng hàm findElement()
const numbers = [5, 2, 8, 1, 9, 3];
const valueToFind = 8;

findElement(numbers, valueToFind)
  .then((foundIndex) => {
    if (foundIndex === -1) {
      console.log("Không tìm thấy phần tử");
    } else {
      console.log("Phần tử được tìm thấy tại vị trí:", foundIndex);
    }
  })
  .catch((error) => {
    console.error("Có lỗi xảy ra:", error);
  });
