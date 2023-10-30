//appendfile() creates file
var fs = require('fs');

fs.appendFile('mynewfile1.txt' ,'Hello content' , function(err){
    if(err) throw err ;
    console.log('saved!')
});

// fs.open()  "w" for "writing"

var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

// fs.writeFile()  method replaces the specified file and content if it exists.
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

//fs.unlink() To delete a file with the File System module,

var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

//fs.rename()  To rename a file with the File System module,

var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

