import { Test, TestingModule } from '@nestjs/testing';
import { NewProductController } from './new-product.controller';

describe('NewProductController', () => {
  let controller: NewProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewProductController],
    }).compile();

    controller = module.get<NewProductController>(NewProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
