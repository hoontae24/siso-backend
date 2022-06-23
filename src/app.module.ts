import { ConfigModule } from '@config/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [ConfigModule, NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
