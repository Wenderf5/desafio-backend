import { Controller, Get, Res } from '@nestjs/common';
import { GetAllProductsService } from '../../services/get-all-products/get-all-products.service';
import { Response } from 'express';

@Controller()
export class GetAllProductsController {
    constructor(
        private get_all_products_service: GetAllProductsService
    ) { }

    @Get('/get-all-products')
    getAllProducts(@Res() res: Response): Promise<Response> {
        return this.get_all_products_service.getAllProducts(res);
    }
}
