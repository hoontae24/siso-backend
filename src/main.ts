import { ConfigService } from '@config/config';
import { DocumentService } from "@app/document";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.get(DocumentService).setupSwagger(app);

  const { port } = app.get(ConfigService);
  await app.listen(port, () =>
    console.log(`Server is running on port ${port}`),
  );
}
bootstrap();
