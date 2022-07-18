import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({
  imports: [DatabaseModule],
  providers: [DatabaseService],
})
export class DatabaseModule {}
