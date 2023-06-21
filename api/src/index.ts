import fastify from 'fastify'

const server = fastify()

server.listen({ port: 8080 }, (err: any, address:any) => {
  if (err) {
    console.error(err)
  }
  console.log(`Server listening at ${address}`)
})