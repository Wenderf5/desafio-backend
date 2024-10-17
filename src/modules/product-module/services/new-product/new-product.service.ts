import { HttpStatus, Injectable } from '@nestjs/common';
import { newProductDto } from '../../controllers/new-product/dto/new-product-dto';
import { Response } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/dataBase/entities/products-entity/products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NewProductService {
    constructor(
        @InjectRepository(Products)
        private products_repository: Repository<Products>
    ) { }

    async newProduct(product: newProductDto, res: Response): Promise<Response> {
        try {
            const db_product: Products = await this.products_repository.findOne({ where: { product_id: product.product_id } });
            if (db_product) {
                return res.status(HttpStatus.CONFLICT).send({ message: 'This product already exists.' });
            }
            await this.products_repository.save(product);
            return res.status(HttpStatus.CREATED).send({ message: 'Product created.' });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Failed to create product.' });
        }
    }
}
