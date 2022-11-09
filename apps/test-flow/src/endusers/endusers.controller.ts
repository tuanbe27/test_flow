import { Controller, Get } from '@nestjs/common';
import { EndusersService } from './endusers.service';

@Controller('customer/endusers')
export class EndusersController {
  constructor(private readonly endusersService: EndusersService) {}

  @Get()
  getData() {
    return this.endusersService.getEndusers();
  }
}
