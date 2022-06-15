import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { VoteSubject } from './entity';

const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: process.env.NODE_ENV === 'production' ? false : true,
  logging: true,
  entities: [VoteSubject],
  migrations: ['src/migration/.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migrations',
  },
};

export = ormConfig;
