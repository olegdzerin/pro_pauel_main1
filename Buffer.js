'use strict';
let a = [1, 2, 3];
let b = Buffer.from(a);
console.log(b);
// const buf = new ArrayBuffer(3);
// const view1 = new DataView(buf);
// for (let i = 0; i < 3; i++) { 
//     let value = (i+1)*7
//     view1.setUint8(i, value);
// };
// console.dir({
//     view1Uint8: view1.getUint8(1)
// });

let a2 = new Uint8Array([1, 2, 3]);
console.log(a2);
let b2 = Buffer.from(a2);
console.log(b2);
let b3 = Buffer.alloc(10);
console.log(b3);
let b4 = Buffer.allocUnsafe(10);
console.log(b4);