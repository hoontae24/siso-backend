import { ConfigModule } from '@config/config';
import { DocumentModule } from '@app/document';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [ConfigModule, DocumentModule, NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
