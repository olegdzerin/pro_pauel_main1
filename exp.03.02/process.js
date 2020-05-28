process.stdin.setEncoding('utf8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input == "test") {
        // Эхо-вывод текста
        var input1 = `this ${input}`;
        process.stdout.write(input);
        // var command = input.trim();
        // if (command == 'exit')
        // process.exit(0);
        console.log(input1);
         
        //  console.log(typeof(input));
    } else {
        var input2 = `this err ${input}`;
        process.stderr.write(input2);
    }
}
);