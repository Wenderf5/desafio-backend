import { IsString } from "class-validator";

export class newUserDto {
    @IsString()
    name: string;
}