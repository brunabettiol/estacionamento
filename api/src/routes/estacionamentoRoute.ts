import { FastifyInstance, FastifyRequest } from "fastify"
import { CodigoParam } from "./schema/request"
import { alteraEstacionamentoService, buscaEstacionadosService, buscaEstacionamentoPorCodigoService, criaEstacionamentoService } from "../services/estacionamentoService"
import { Estacionamento } from "../models/estacionamento"

export const autoPrefix = '/estacionamento'

async function estacionamentoRouter(fastify:FastifyInstance): Promise<void> {
    fastify.get('/:codigo', buscaEstacionamentoPorCodigoRoute) 

    fastify.get('/estacionados', buscaEstacionadosRoute)

    fastify.post('/', criaEstacionamentoRoute)

    fastify.put('/:codigo', alteraEstabalecimentoRoute)

    async function buscaEstacionamentoPorCodigoRoute(request:FastifyRequest<{Params: CodigoParam}>) {
        const codigo = request.params.codigo
        return buscaEstacionamentoPorCodigoService(codigo)
    }
    async function buscaEstacionadosRoute() {
        return buscaEstacionadosService()
    }
    async function criaEstacionamentoRoute(request:FastifyRequest<{Body: Estacionamento}>) {
        return criaEstacionamentoService(request.body)
    }
    async function alteraEstabalecimentoRoute(request:FastifyRequest<{Params: CodigoParam, Body: Estacionamento}>) {
        const codigo = request.params.codigo
        return alteraEstacionamentoService(codigo, request.body)
    }
}

export default estacionamentoRouter