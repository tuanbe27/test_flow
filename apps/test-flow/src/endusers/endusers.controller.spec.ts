import { Test, TestingModule } from '@nestjs/testing';
import { EndusersController } from './endusers.controller';

describe('EndusersController', () => {
  let controller: EndusersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EndusersController],
    }).compile();

    controller = module.get<EndusersController>(EndusersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
