import { Note } from 'src/notes/interfaces/notes';

let seq = 0;
const getNextSeq = (): number => ++seq;

export const notes: Note[] = [
  {
    id: getNextSeq(),
    title: 'First note',
    content: 'This is the first note',
  },
  {
    id: getNextSeq(),
    title: 'Second note',
    content: 'No contents',
  },
];
