import { Test, TestingModule } from '@nestjs/testing';
import { GetAllProductsService } from './get-all-products.service';

describe('GetAllProductsService', () => {
  let service: GetAllProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllProductsService],
    }).compile();

    service = module.get<GetAllProductsService>(GetAllProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
