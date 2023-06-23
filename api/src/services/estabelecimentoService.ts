import { Estabelecimento } from "../models/estabelecimento";
import { alteraEstabelecimento, buscaEstabelecimento, criaEstabelecimento } from "../repositories/estabelecimentoRepository";

export async function buscaEstabelecimentoPorCodigoService(codigo:number): Promise<Estabelecimento | undefined> {
    return buscaEstabelecimento(codigo)
}

export async function criaEstabelecimentoService(estabelecimento:Estabelecimento): Promise<Estabelecimento> {
    return criaEstabelecimento(estabelecimento)    
}

export async function alteraEstabelecimentoService(codigo:number, estabelecimento:Estabelecimento): Promise<Estabelecimento | undefined> {
    return alteraEstabelecimento(codigo,estabelecimento)
}
