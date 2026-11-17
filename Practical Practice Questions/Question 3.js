const fs = require('fs')
fs.writeFile("std.txt","Name: Kaavy",(err)=>{
    if(err){
        console.log(err)
    } else{
        console.log("File Created")
    }
})

fs.readFile('std.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    } else{
        console.log(data)
    }
})
̥