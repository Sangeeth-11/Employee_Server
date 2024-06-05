const jsonServer = require('json-server')
const server = jsonServer.create()

const route =jsonServer.router('db.json')
const middleware = jsonServer.defaults()

server.use(middleware)
server.use(route)

const port = 3000 | process.env.port
server.listen(3000,()=>{
    console.log(`running at port ${port}`);
})