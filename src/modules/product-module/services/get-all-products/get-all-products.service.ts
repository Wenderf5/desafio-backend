import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { Products } from 'src/dataBase/entities/products-entity/products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetAllProductsService {
    constructor(
        @InjectRepository(Products)
        private products_repository: Repository<Products>
    ) { }

    async getAllProducts(res: Response): Promise<Response> {
        try {
            const products: Products[] = await this.products_repository.find();
            return res.status(HttpStatus.OK).send(products);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).send({ message: "Error searching for products." })
        }
    }
}
