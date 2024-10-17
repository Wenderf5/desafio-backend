import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { newProductDto } from './dto/new-product-dto';
import { NewProductService } from '../../services/new-product/new-product.service';

@Controller()
export class NewProductController {
    constructor(
        private new_product_service: NewProductService
    ) { }

    @Post('/new-product')
    newProduct(@Body() body: newProductDto, @Res() res: Response): Promise<Response> {
        return this.new_product_service.newProduct(body, res);
    }
}
