import { Estacionamento } from "../models/estacionamento";
import { alteraEstacionamento, buscaEstacionados, buscaEstacionamento, criaEstacionamento } from "../repositories/estacionamentoRepository";

export async function buscaEstacionamentoPorCodigoService(codigo:number): Promise<Estacionamento | undefined> {
    return buscaEstacionamento(codigo)
}

export async function criaEstacionamentoService(estacionamento:Estacionamento): Promise<Estacionamento> {
    return criaEstacionamento(estacionamento)    
}

export async function alteraEstacionamentoService(codigo:number, estacionamento:Estacionamento): Promise<Estacionamento | undefined> {
    return alteraEstacionamento(codigo,estacionamento)
}
export async function buscaEstacionadosService() {
    return buscaEstacionados()
}
