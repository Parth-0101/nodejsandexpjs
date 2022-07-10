const http = require('http')

const server = http.createServer((req,res)=>{
   if(req.url==='/') 
   {
    res.end("welcome to our home page")
   }
   if(req.url==='/About') 
   {
    res.end("this is our about page")
   }
   else{
   res.end(`
   <h1>OOPS</h1>
   <p> Looks like there is an error </p>
   <a href="/"> HOME</a>
   `)
   }
})

server.listen(3000)