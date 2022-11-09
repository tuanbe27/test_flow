import { Test, TestingModule } from '@nestjs/testing';
import { EndusersService } from './endusers.service';

describe('EndusersService', () => {
  let service: EndusersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EndusersService],
    }).compile();

    service = module.get<EndusersService>(EndusersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
