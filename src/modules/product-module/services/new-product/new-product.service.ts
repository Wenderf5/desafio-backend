import { HttpStatus, Injectable } from '@nestjs/common';
import { newProductDto } from '../../controllers/new-product/dto/new-product-dto';
import { Response } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/dataBase/entities/products-entity/products.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { DateTime } from 'luxon';

@Injectable()
export class NewProductService {
    constructor(
        @InjectRepository(Products)
        private products_repository: Repository<Products>
    ) { }

    async newProduct(product: newProductDto, res: Response): Promise<Response> {
        try {
            const newProduct = {
                product_id: uuidv4(),
                artist: product.artist,
                year: product.year,
                album: product.album,
                price: product.price,
                store: product.store,
                thumb: product.thumb,
                date: DateTime.now().setZone('America/Sao_Paulo').toFormat('yyyy/MM/dd')
            }
            const db_product: Products = await this.products_repository.findOne({
                where: {
                    product_id: newProduct.product_id
                }
            });
            if (db_product) {
                return res.status(HttpStatus.CONFLICT).send({ message: 'This product already exists.' });
            }
            await this.products_repository.save(newProduct);
            return res.status(HttpStatus.CREATED).send({ message: 'Product created.' });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Failed to create product.' });
        }
    }
}