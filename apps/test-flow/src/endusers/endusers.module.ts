import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EndusersController } from './endusers.controller';
import { EndusersService } from './endusers.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      baseURL: 'https://play.railsbank.com',
      headers: {
        Accept: 'application/json',
        Authorization:
          'API-Key 11cqyci9nlfzbs7f3lbnlc5g755nsjq4#dzdkic5dt46qf2mqqvnmkvn3498gxrrcvrrcvj3huy28bz3k2hxgp5bounyq1vma',
      },
    }),
  ],
  controllers: [EndusersController],
  providers: [EndusersService],
})
export class EndusersModule {}
