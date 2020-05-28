let works = {

    work(a, b) {
      
        //  console.log(a); // произвольная функция или метод
        return a + b;
    }
};
works.calls = [];
function spy(func) { 
    let cash = new Map();
    
    return function () {
        if (cash.has(...arguments)) { 
            console.log("it cash");
            return cash.get(...arguments);
        };
        works.calls.push(arguments);
        let result = func.call(this, ...arguments)
        cash.set(...arguments, result);
        console.log(works.calls);
        return result ;
    };
    return result
};
  
  works.work = spy(works.work);
  
//works.work(2); // 3
console.log(works.work(9,2));
console.log(works.work(92,2));
  //work(4, 5); // 9
  
//   for (let args of work.calls) {
//     console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
//   }
console.log(works.calls[0][1]);
