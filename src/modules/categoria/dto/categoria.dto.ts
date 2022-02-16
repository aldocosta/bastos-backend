import { IsNotEmpty } from "class-validator";

export class CategoriaDTO {

  public id: number;

  @IsNotEmpty({ message: 'Campo nm_categoria não pode ser vazio' })
  public nm_categoria: string;
}
