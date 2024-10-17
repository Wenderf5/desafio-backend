import { IsString } from "class-validator";

export class newUserDto {
    @IsString()
    user_name: string;
}