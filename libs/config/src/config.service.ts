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
}
