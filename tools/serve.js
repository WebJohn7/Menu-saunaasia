const http=require("http"),fs=require("fs"),path=require("path");
const root=process.argv[2]||".", port=+(process.argv[3]||8123);
const types={".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".json":"application/json; charset=utf-8",".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg",".svg":"image/svg+xml"};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split("?")[0]);
  if(p==="/")p="/index.html";
  const f=path.resolve(root,"."+p);
  if(!f.startsWith(path.resolve(root))){res.writeHead(403).end();return;}
  fs.readFile(f,(e,d)=>{
    if(e){res.writeHead(404,{"content-type":"text/plain"}).end("404");return;}
    res.writeHead(200,{"content-type":types[path.extname(f).toLowerCase()]||"application/octet-stream"});
    res.end(d);
  });
}).listen(port,()=>console.log("serving "+path.resolve(root)+" on http://localhost:"+port));
