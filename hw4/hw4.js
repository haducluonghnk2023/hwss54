"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function sumWithAsyncAwait(numbers) {
    return __awaiter(this, void 0, void 0, function* () {
        const sum = yield new Promise((resolve) => {
            setTimeout(() => {
                const result = numbers.reduce((acc, curr) => acc + curr, 0);
                resolve(result);
            }, 1000);
        });
        return sum;
    });
}
sumWithAsyncAwait([1, 2, 3, 4, 5]).then((result) => {
    console.log(`Tổng của các số trong mảng là: ${result}`);
});
