const fs=require("fs")
const http = require("http");
http.createServer((req,res)=>{
    if(req.url != "/favicon.ico"){
        let o = req.url.split("/");
       // console.log(o);
        switch(o[1]){
            case 'add':
             var op= Number(o[2])+Number(o[3])
            console.log("add"+op)
            res.write("<h1>add ="+op+"</h1>")
            fs.appendFileSync("file.txt",`add of number = ${op}\n`)
            break;
            
            case 'sub':
             var op= Number(o[2])-Number(o[3])
            console.log("sub ="+op)
            res.write("<h1>sub ="+op+"</h1>")
            fs.appendFileSync("file.txt",`sub of number = ${op}\n`)
            break;
            case 'mul':
        var op= Number(o[2])*Number(o[3])
            console.log("mul ="+op)
            res.write("<h1>mul ="+op+"</h1>")
            fs.appendFileSync("file.txt",`mul of number = ${op}\n`)
            break;
            
            case 'div':
             var op= Number(o[2])/Number(o[3])
            console.log("div ="+op)
            res.write("<h1>div ="+op+"</h1>")
            fs.appendFileSync("file.txt",`div of number = ${op}\n`)
            break;
            
             }
        console.log(req.method);
        console.log(res.statusCode);
        // res.write("Hello at my Server")
      //  res.writeHead(200,{"content-type":"text/html"})
        // res.write("<h1>Hello at my Server<h1>")
    }
    res.end();
})
.listen("7000",
            ()=>{
                console.log("Lisining on Port 7000")
            }
       )
