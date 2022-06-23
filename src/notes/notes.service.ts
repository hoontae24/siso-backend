import { Injectable } from '@nestjs/common';
import { notes } from 'src/notes/fixtures/notes';
import { Note } from 'src/notes/interfaces/notes';

@Injectable()
export class NotesService {
  async findAll(): Promise<Note[]> {
    return notes;
  }

  async findById(id: number): Promise<Note | null> {
    return notes.find((note) => note.id === id) ?? null;
  }
}
