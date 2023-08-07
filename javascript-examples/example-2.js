const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err);;
        return;
    }

    if(!err) {
        console.log(data);
    }

    fs.writeFile('example2.txt', data, (err) => {
        if (err) {
            console.error(err);
            return;
          }
          console.log('File successfully written.');
    });
})
