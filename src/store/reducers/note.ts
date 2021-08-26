import { Reducer } from 'redux';
import { FluxStandardAction } from 'redux-promise-middleware';
import { SET_NOTE_IN_FOCUS } from '../actions/note';

enum NoteType {
  TEXT = 'text',
  MARKDOWN = 'markdown',
  LATEX = 'latex',
  RICHTEXT = 'richtext',
}

export type NoteIdType = string;

// TODO: move out of this file
interface Note {
  // id will be undefined for a newly created note
  id?: NoteIdType;
  title: string;
  content: string;
  createdTimestamp: number;
  lastModifiedTimestamp: number;
  tags?: string[];
  type: NoteType;
  createdBy: string;
  lastModifiedBy?: string;
}

export interface NoteState {
  selectedNote?: string;
  // only note id's and title to be fetched
  // to reduce load & improve performance
  allNotes?: string[];
  // cache of fetched notes
  // this will contain all notes attributes
  fetchedNotes?: Note[];
}

export interface NoteState {
  focussedNote?: Note;
  focussedNoteId?: NoteIdType;
}

const defaultState: NoteState = {};

const note: Reducer<NoteState, FluxStandardAction> = (
  state: NoteState = defaultState,
  action: FluxStandardAction,
) => {
  switch (action.type) {
    case SET_NOTE_IN_FOCUS:
      return {
        focussedNote: action.payload?.selectedNote,
        focussedNoteId: action.payload?.selectedNote.id,
      };

    default:
      return state;
  }
};

export default note;
