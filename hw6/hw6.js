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
function isPrimeWithAsyncAwait(n) {
    return __awaiter(this, void 0, void 0, function* () {
        const isPrime = yield new Promise((resolve) => {
            setTimeout(() => {
                if (n <= 1) {
                    resolve(false);
                }
                else if (n <= 3) {
                    resolve(true);
                }
                else if (n % 2 === 0 || n % 3 === 0) {
                    resolve(false);
                }
                else {
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
    });
}
isPrimeWithAsyncAwait(29).then((result) => {
    console.log(`29 có phải là số nguyên tố không? ${result}`);
});
isPrimeWithAsyncAwait(15).then((result) => {
    console.log(`15 có phải là số nguyên tố không? ${result}`);
});
