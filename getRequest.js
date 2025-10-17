const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.method==='GET' && req.url=='/'){
        res.writeHead(200,{'content-type':'application/json'})
        res.end('Data received')
    }
    else{
        res.writeHead(200,{'content-type':'text/plain'})
        res.end(404,'Page not found')
    }
})

const PORT=3000
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})