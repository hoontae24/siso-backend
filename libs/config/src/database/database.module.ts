import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseService } from './database.service';

@Module({
  imports: [DatabaseModule],
  providers: [DatabaseService],
})
export class DatabaseModule {}
