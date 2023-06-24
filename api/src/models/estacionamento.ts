import { Estabelecimento } from "./estabelecimento"

export type Estacionamento = {
    estabelecimento: Estabelecimento,
    placa: string,
    descricao: string,
    estacionado: boolean,
    entrada: Date,
    saida: Date,
    valor: number
}