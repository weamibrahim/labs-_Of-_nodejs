const http = require("http");
const fs = require("fs");

let formFileHTML = fs.readFileSync("../form/form.html").toString();
let ProfileFileHTML = fs.readFileSync("../form/profile.html").toString();
let formCSS = fs.readFileSync("../form/form.css").toString();
let ScriptFile = fs.readFileSync("../form/form.js").toString();
let myImage = fs.readFileSync("../form/4110786-959008197.jpg");
let myIcon = fs.readFileSync("../form/favicon.ico");

var userName = "";
var email="";
var address="";
var phone="";

http.createServer((req,res)=>{
    //#region GET
    if(req.method == "GET"){
            switch(req.url){
                case "/form.html":
                   
                    res.setHeader("Access-Control-Allow-Origin","*");//MiddleWare ==> install ==> use
                    //CORS[Front xxx Back]
                    res.write(formFileHTML);
                break;
                case "/profile.html":
                    res.write(ProfileFileHTML);
                break;
                case "/form.css":
                    res.writeHead(200,"Ok",{"content-type":"text/css"})
                    res.write(formCSS)
                break;
                case "/4110786-959008197.jpg":
                    res.writeHead(200,"ok",{"content-type":"image/jpeg"})
                    res.write(myImage)
                break;
                case "/form.js":
                    res.writeHead(300,"Hii",{"content-type":"text/javascript"})
                    res.write(ScriptFile)
                break;
             
                case "/favicon.ico":
                    res.writeHead(200,"ok",{"content-type":"image/vnd.microsoft.icon"})
                    res.write(myIcon)
                break;
                default:
                    res.write("<h1>No Page Found</h1>")
                break;
            }
            res.end();
    }
    //#endregion
    //#region POST
    else if(req.method == "POST"){//url
        req.on("data",(data)=>{
           console.log(data.toString())
            userName = data.toString().split("=")[1];
            userName=userName.split("&")[0]
            //console.log(userName)
            email = decodeURIComponent(data.toString().split("=")[2]);
            email=email.split("&")[0]
           console.log(email)
            address = data.toString().split("=")[3];
            address=address.split("&")[0]
           console.log(address)
            phone= data.toString().split("=")[4];
           // console.log(phone)
        
           
        })
        req.on("end",()=>{

            ProfileFileHTML = ProfileFileHTML.replace("{userName}",userName)
            
          
            ProfileFileHTML = ProfileFileHTML.replace("{email}",email)
          
            ProfileFileHTML = ProfileFileHTML.replace("{address}",address)
          
            ProfileFileHTML = ProfileFileHTML.replace("{phone}",phone)
            res.write(ProfileFileHTML)
            res.end();
        })
    }
    //#endregion
    //#region PUT
    else if(req.method == "PUT"){

    }
    //#endregion
    //#region DELETE
    else if(req.method == "DELETE"){

    }
    //#endregion
    
}).listen("7001", ()=>{console.log("http://localhost:7001")})