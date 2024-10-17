import { Test, TestingModule } from '@nestjs/testing';
import { GetAllProductsController } from './get-all-products.controller';

describe('GetAllProductsController', () => {
  let controller: GetAllProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAllProductsController],
    }).compile();

    controller = module.get<GetAllProductsController>(GetAllProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
