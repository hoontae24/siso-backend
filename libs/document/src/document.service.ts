import { INestApplication, Injectable } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@config/config';

@Injectable()
export class DocumentService {
  constructor(private readonly configService: ConfigService) {}

  public setupSwagger(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('SISO API Docs')
      .setDescription('SISO API description')
      .setVersion('1.0.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(this.configService.swaggerPath, app, document);
  }
}
