import { INestApplication } from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

export const setupSwagger = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .setTitle('SISO API Docs')
        .setDescription('SISO API description')
        .setVersion('1.0.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    const path = process.env.SWAGGER_PATH || 'api-docs';
    SwaggerModule.setup(path, app, document);
};