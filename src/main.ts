import { ConfigService } from '@config/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './util/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  const { port } = app.get(ConfigService);
  await app.listen(port, () =>
    console.log(`Server is running on port ${port}`),
  );
}
bootstrap();
