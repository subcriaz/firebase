var gqlServer =require('./index1.js')

var server=gqlServer()
var port = process.env.PORT||5000

server.listen({port:port}, ()=>
  console.log(`?? Server ready at http://localhost:${port}`)
)