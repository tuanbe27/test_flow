import { Module } from '@nestjs/common';
import { EndusersModule } from '../endusers/endusers.module';
import { LedgersModule } from '../ledgers/ledgers.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [LedgersModule, EndusersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
