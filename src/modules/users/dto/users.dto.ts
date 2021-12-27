import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class UsersDTO {

    public id: string;

    @IsEmail({}, { message: 'Email invalido' })
    @IsNotEmpty({ message: 'Campo não pode ser vázio' })
    @MaxLength(30, { message: 'Campo email não pode ter mais que 30 caracteres' })
    public email: string;

    @IsNotEmpty({ message: 'Campo Name não pode ser vázio' })
    @MaxLength(30, { message: 'Campo name não pode ter mais que 30 caracteres' })
    @MinLength(6, { message: 'Campo name não pode ter menos que 6 caracteres' })
    public name: string;

    @IsNotEmpty({ message: 'Campo não pode ser vázio' })
    @MaxLength(30, { message: 'Campo password não pode ter mais que 30 caracteres' })
    @MinLength(6, { message: 'Campo password não pode ter menos que 6 caracteres' })
    public password: string;

}