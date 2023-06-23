import Fastify from 'fastify'
import cors from '@fastify/cors'
import autoLoad from '@fastify/autoload'
import { dirname, join } from 'path'

const __dirname = dirname(__filename)
const fastify = Fastify({
  logger: true
})

fastify.register(cors)
fastify.register(autoLoad, {
  dir: join(__dirname, 'routes'),
  autoHooks: true,
  dirNameRoutePrefix: false
})

fastify.listen({ port: 8080 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
})