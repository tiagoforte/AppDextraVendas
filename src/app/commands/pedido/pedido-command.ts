import { ItensPedidoCommand } from "./itens-pedido-command";

export interface PedidoCommand {

    idLanche: number;
    itensPedido: Array<ItensPedidoCommand>
}