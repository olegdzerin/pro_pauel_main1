const http = require('http'); 
http.get('http://localhost:8000', function (res) {
    // res.statusCode = 200;
    let rawData = '';
    console.log(res.headers);
    // res.on('data', (chunk) => { 
    //     rawData += chunk;
    // });
  
    // res.on('end', () => { 
    //     try {
    //         console.log(rawData);
    //     } catch (e) { 
    //         console.error(e.message);
    //     }
    // });
    res.setEncoding('utf8');
     
    let chunk = "this ghunk ga ga gag ag ag ag ga g ag "
 res.push(chunk);
   
    res.on('readable', function () {
         let data = '';
        while (null !== (data = res.read())){
            
            
            console.log(`this data ${data}`);
          //  console.log();
        }
        // data = res.read();
        // console.log(res.read());
        // console.log(data);

       
    });
});
