const fs = require('fs');

///// reading files (works) // fs.readFile()

// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log(data)
//     //<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64> result is this.
//     console.log(data.toString());
//     // Hello world.   result is this
// });
// fs.readFile('./docs/blog.txt',(err,data)=>{
//     if(err)
//     {
//         console.log(err); // no such file or directory .result is this
//     }
//     console.log(data)
// });
// 

// writing files  // fs.writeFile()
// if blog1.txt is existe this code change contains.
// fs.writeFile('./docs/blog1.txt','bonjour',()=>{
//     console.log("file was written")
// });
// // if file does not exist this code create a file and write into it.
// fs.writeFile('./docs/blog2.txt','Hallo',()=>{
//     console.log("file was written")
// });

// directories   //fs.mkdir()  // fs.rmdir()
// if(!fs.existsSync('./assets')){ // we check if file exist !fs.
//     fs.mkdir('./assets', (err)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         console.log("folder created")
//     });
// }
// else
// {
//     fs.rmdir('./assets',(err)=>{
//         if(err)
//         {
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }
// 
// // delete files
// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err)=>{
//         if(err)
//         {
//             console.log(err)
//         }
//         console.log('file deleted')
//     });
// };