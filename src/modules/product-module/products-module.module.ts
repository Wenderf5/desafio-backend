import { Module } from '@nestjs/common';
import { GetAllProductsController } from './controllers/get-all-products/get-all-products.controller';
import { NewProductController } from './controllers/new-product/new-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from 'src/dataBase/entities/products-entity/products.entity';
import { NewProductService } from './services/new-product/new-product.service';
import { GetAllProductsService } from './services/get-all-products/get-all-products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  controllers: [GetAllProductsController, NewProductController],
  providers: [NewProductService, GetAllProductsService]
})
export class ProductsModuleModule { }
