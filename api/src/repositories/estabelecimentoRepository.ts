import { Estabelecimento } from "../models/estabelecimento"

const estabelecimentoCollection: Estabelecimento[] = []

export async function buscaEstabelecimento(codigoEstabelecimento:number): Promise<Estabelecimento | undefined> {
    return estabelecimentoCollection[codigoEstabelecimento]
}

export async function criaEstabelecimento(estabelecimento:Estabelecimento): Promise<Estabelecimento> {
    estabelecimentoCollection.push(estabelecimento) 
    return estabelecimento   
}

export async function alteraEstabelecimento(codigo: number, estabalecimento:Estabelecimento): Promise<Estabelecimento> {
    estabelecimentoCollection[codigo] = estabalecimento
    return estabalecimento
}