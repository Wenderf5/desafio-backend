import { IsNumber, IsString } from "class-validator";

export class newProductDto {
    @IsString()
    product_id: string;

    @IsString()
    artist: string;

    @IsNumber()
    year: number;
    
    @IsString()
    album: string;

    @IsNumber()
    price: number;

    @IsString()
    store: string;

    @IsString()
    thumb: string;

    @IsString()
    date: string;
}