var fs = require('fs');

// removefile
fs.unlink('readme2.md');

// create directory
//fs.mkdirSync('stuff');

// remove directory
//fs.rmdirSync('stuff');

// creatae directory and file
// fs.mkdir('stuff' ,function(){
//     fs.readFile('readme.md','utf8' ,function(err,data){
//         fs.writeFile('./stuff/readme2.md', data);
//     });
// });

