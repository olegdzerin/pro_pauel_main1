'use strict';
 let buf = new buffer(25);
const len = 1024;
 const buffer1= new ArrayBuffer(len);
// const buffer1 = new buffer(len);

const view1 = new DataView(buffer1);
const view2 = new DataView(buffer1, 8, 24);
const view3 = new DataView(buffer1, 128, 16);

for (let i = 0; i < len; i++) { 
    const value = (i + 7) * 5;
    view1.setUint8(i, value);
}
console.dir({ view1, view2, view3 });

console.dir({
    // int8view1: view1.getInt8(10),
    // int16view1: view1.getInt16(10),
    // int16viewLE: view1.getInt16(10, true),
    // int16view2: view2.getInt16(10),
    // int32view1: view2.getUint32(10),

    // int8view1: view1.getInt8(20),
    // uint8view1: view2.getInt8(20),

    int32view1Be: view1.getInt32(5),
    int32view1LE: view1.getInt32(5,true),

    
    int32view1Behex: view1.getInt32(5).toString(16),
    int32view1LEhex: view1.getInt32(5,true).toString(16),
})
