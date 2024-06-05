"use strict";
function sortArrayWithPromise(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr) || arr.some(isNaN)) {
            reject(new Error("Tham số truyền vào phải là một mảng số nguyên."));
        }
        const sortedArray = [...arr].sort((a, b) => a - b);
        resolve(sortedArray);
    });
}
// Sử dụng hàm sortArrayWithPromise()
const unsortedArray = [5, 2, 8, 1, 9, 3];
sortArrayWithPromise(unsortedArray)
    .then((sortedArray) => {
    console.log("Mảng đã được sắp xếp:", sortedArray);
})
    .catch((error) => {
    console.error("Có lỗi xảy ra:", error);
});
