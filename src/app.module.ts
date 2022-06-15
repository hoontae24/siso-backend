import { ConfigModule } from '@config/config';
import { DocumentModule } from "@app/document";
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { DatabaseModule } from './database/database.module';
import { VoteSubjectModule } from './vote-subject';

@Module({
  imports: [ConfigModule, NotesModule, DatabaseModule,DocumentModule, VoteSubjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
