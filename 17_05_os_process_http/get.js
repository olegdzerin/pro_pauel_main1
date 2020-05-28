const http = require('http'); 
http.get('http://nodejs.org/dist/index.json', (res) => {
   

    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
            `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
            `Expected application/json but received ${contentType}`);
    }
    if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
        console.log(chunk);
        console.log('chunk');
    });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            // console.log(parsedData);
            // console.log(res.headers['content-type']);
            // console.log(statusCode);
            // console.log(res.headers);
            console.log('end');
           
        } catch (e) {
            console.error(e.message);
        }
 
   
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});
