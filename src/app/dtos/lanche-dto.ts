import { IngredienteDto } from './ingrediente-dto';
export interface LancheDto {
    id: number;
    nome: string;
    valor: number;
    ingredientes: Array<IngredienteDto>;
}