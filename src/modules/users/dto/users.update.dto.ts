import { IsEmail, IsEmpty, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class UsersUpdateDTO {

    public id: string;

    // @IsEmail({}, { message: 'Email invalido' })    
    // @IsEmpty()
    // @MaxLength(30, { message: 'Campo email não pode ter mais que 30 caracteres' })
    public email: string;
    
    // @MaxLength(30, { message: 'Campo name não pode ter mais que 30 caracteres' })
    // @MinLength(6, { message: 'Campo name não pode ter menos que 6 caracteres' })
    public name: string;
    
    // @MaxLength(30, { message: 'Campo password não pode ter mais que 30 caracteres' })
    // @MinLength(6, { message: 'Campo password não pode ter menos que 6 caracteres' })
    public password: string;

}