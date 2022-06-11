import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { Note } from './interfaces/notes';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async findAll(): Promise<Note[]> {
    return this.notesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') _id: string): Promise<Note> {
    const id = parseInt(_id);
    if (isNaN(id)) {
      throw new BadRequestException(
        `Invalid value for id of path parameter: "${_id}"`,
      );
    }
    const note = await this.notesService.findById(id);
    if (!note) {
      throw new NotFoundException(`There is no note with id ${id}`);
    }
    return note;
  }
}
