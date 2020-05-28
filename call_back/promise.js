let promise = new Promise(function (resolve, reject) { 
    setTimeout(function () { resolve('resultate');},3000);
   // setTimeout(function () { reject(new Error("oops"));},3000);
});
console.log(promise);
promise.then(data => console.log(promise),
err => console.log(err));
