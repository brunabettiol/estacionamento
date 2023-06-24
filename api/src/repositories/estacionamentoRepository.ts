import { Estacionamento } from "../models/estacionamento"

const estacionamentoCollection: Estacionamento[] = []

export async function buscaEstacionamento(codigoEstacionamento:number): Promise<Estacionamento | undefined> {
    return estacionamentoCollection[codigoEstacionamento]
}

export async function criaEstacionamento(estacionamento:Estacionamento): Promise<Estacionamento> {
    estacionamentoCollection.push(estacionamento) 
    return estacionamento   
}

export async function alteraEstacionamento(codigo: number, estabalecimento:Estacionamento): Promise<Estacionamento> {
    estacionamentoCollection[codigo] = estabalecimento
    return estabalecimento
}
export async function buscaEstacionados() {
    return estacionamentoCollection.filter(estacionamento => {
        return estacionamento.estacionado
    })
}