import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly env: NodeJS.ProcessEnv;

  constructor() {
    // Initialize
    // NOTE 인스턴스 생성 시 초기화한 후 동적으로 env가 변경되지 않도록 하기 위해서 로컬 멤버변수로 지정함.
    this.env = process.env;
  }

  public get port(): number {
    const { PORT } = this.env;
    const port = (PORT && parseInt(PORT)) || 3000;
    return port;
  }

  public get swaggerPath(): string {
    const { SWAGGER_PATH } = this.env;
    const path = SWAGGER_PATH || 'api-docs';
    return path;
  }

  public get database(): {
    host: string;
    port: number;
    username: string;
    password: string;
    name: string;
  } {
    const {
      DATABASE_HOST,
      DATABASE_PORT,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
      DATABASE_NAME,
    } = this.env;
    const host = DATABASE_HOST ?? 'localhost';
    const port = (DATABASE_PORT && parseInt(DATABASE_PORT)) || 5432;
    const username = DATABASE_USERNAME ?? 'postgres';
    const password = DATABASE_PASSWORD ?? 'postgres';
    const name = DATABASE_NAME ?? 'postgres';
    return { host, port, username, password, name };
  }
}
