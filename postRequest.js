const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.method==='POST' && req.url==='/submit'){

        let body=''
        req.on('data',(chunk)=>{
            body+=chunk.toString()
        })
        req.on('end',()=>{
             res.writeHead(200,{'content-type':'application/json'})
             res.end(JSON.stringify({message:'Data received',data:body}))
        })     
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