const fs = require('fs');


const readStream = fs.createReadStream('./docs/blog3.txt');// we can add to read {encoding :utf8} after coma , 

//const writeStream = fs.createWriteStream('./docs/blog4.txt'); // blog4.txt doesn't exist

// readStream.on('data', (chunk)=>{
//     console.log('------------NEW CHUNK------------')
//     console.log(chunk.toString()); // to transformer readable format
//     //
//     writeStream.write(`New CHUNK`);
//     writeStream.write(chunk);
// });

//// piping 
const writeStream2 = fs.createWriteStream('./docs/blog5.txt'); // blog4.txt doesn't exist

readStream.pipe(writeStream2); // we dont have to do that we wrote goes up.

