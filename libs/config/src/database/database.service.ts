import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { VoteSubject } from 'src/vote-subject/entity/vote-subject.entity';
import { ConfigService } from '../config.service';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.database.host,
      port: this.configService.database.port,
      username: this.configService.database.username,
      password: this.configService.database.password,
      database: this.configService.database.name,
      synchronize: false,
      entities: [VoteSubject],
      migrations: [__dirname + 'src/migration/*.ts'],
      cli: {
        migrationsDir: 'src/migration',
      },
    };
  }
}
