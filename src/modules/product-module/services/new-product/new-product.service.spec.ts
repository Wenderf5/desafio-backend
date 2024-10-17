import { Test, TestingModule } from '@nestjs/testing';
import { NewProductService } from './new-product.service';

describe('NewProductService', () => {
  let service: NewProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewProductService],
    }).compile();

    service = module.get<NewProductService>(NewProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
