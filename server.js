const jsonServer = require('json-server')
const server = jsonServer.create()

const fs = require('fs')
const path = require('path')
const filePath = path.join('data/db.json')
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = jsonServer.router(db)

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})