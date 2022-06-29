import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './config.service';
import { DatabaseModule } from './database/database.module';
import { DatabaseService } from './database/database.service';

const NestConfigDynamicModule = NestConfigModule.forRoot({
  envFilePath: ['.env.local', '.env'],
});

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [NestConfigDynamicModule, DatabaseModule],
      useClass: DatabaseService,
      inject: [DatabaseService],
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
