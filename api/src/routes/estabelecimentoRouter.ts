import { FastifyInstance, FastifyRequest } from "fastify"
import { CodigoParam } from "./schema/request"
import { alteraEstabelecimentoService, buscaEstabelecimentoPorCodigoService, criaEstabelecimentoService } from "../services/estabelecimentoService"
import { Estabelecimento } from "../models/estabelecimento"

export const autoPrefix = '/estabelecimento'

async function estabelecimentoRouter(fastify:FastifyInstance): Promise<void> {
    fastify.get('/:codigo', buscaEstabelecimentoPorCodigoRoute) 

    fastify.post('/', criaEstabelecimentoRoute)

    fastify.put('/:codigo', alteraEstabalecimentoRoute)

    async function buscaEstabelecimentoPorCodigoRoute(request:FastifyRequest<{Params: CodigoParam}>) {
        const codigo = request.params.codigo
        return buscaEstabelecimentoPorCodigoService(codigo)
    }
    async function criaEstabelecimentoRoute(request:FastifyRequest<{Body: Estabelecimento}>) {
        return criaEstabelecimentoService(request.body)
    }
    async function alteraEstabalecimentoRoute(request:FastifyRequest<{Params: CodigoParam, Body: Estabelecimento}>) {
        const codigo = request.params.codigo
        return alteraEstabelecimentoService(codigo, request.body)
    }
}

export default estabelecimentoRouter