"use strict";
function sumWithPromise(numbers) {
    return new Promise((resolve, reject) => {
        try {
            // Kiểm tra xem tham số có phải là mảng và chứa các số nguyên không
            if (!Array.isArray(numbers) || numbers.some((num) => typeof num !== 'number')) {
                throw new Error('Tham số phải là mảng các số nguyên');
            }
            // Tính tổng các số trong mảng
            const sum = numbers.reduce((acc, curr) => acc + curr, 0);
            resolve(sum);
        }
        catch (error) {
            reject(error.message);
        }
    });
}
// Sử dụng hàm sumWithPromise()
sumWithPromise([1, 2, 3, 4, 5])
    .then((result) => {
    console.log(`Tổng các số trong mảng là: ${result}`);
})
    .catch((error) => {
    console.error(`Lỗi: ${error}`);
});
