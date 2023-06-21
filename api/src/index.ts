import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify({
  logger: true
})

fastify.register(cors)

fastify.listen({ port: 3001 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
})