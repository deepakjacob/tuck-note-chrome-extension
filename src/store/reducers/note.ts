import { Reducer } from 'redux';
import { FluxStandardAction } from 'redux-promise-middleware';
import { GET_SELECTED_NOTE } from '../actions/note';

enum NoteType {
  TEXT = 'text',
  MARKDOWN = 'markdown',
  LATEX = 'latex',
  RICHTEXT = 'richtext',
}

// TODO: move out of this file
interface Note {
  // id will be undefined for a newly created note
  id?: string;
  title: string;
  content: string;
  createdTimestamp: number;
  lastModifiedTimestamp: number;
  tags?: string[];
  type: NoteType;
  createdBy: string;
  lastModifiedBy?: string;
}

type NoteCache = {
  [key: string]: Note;
};

export interface NoteState {
  selectedNote?: Note;
  // cache of fetched notes
  // this will contain all notes attributes
  noteCache: NoteCache;
}

const defaultState: NoteState = {
  selectedNote: undefined,
  noteCache: {},
};

const note: Reducer<NoteState, FluxStandardAction> = (
  state: NoteState = defaultState,
  action: FluxStandardAction,
) => {
  switch (action.type) {
    case GET_SELECTED_NOTE:
      const { selectedNote } = action.payload;
      const { id } = selectedNote;
      return {
        selectedNote: selectedNote as Note,
        noteCache: {
          [id]: selectedNote,
          ...state.noteCache,
        },
      };

    default:
      return state;
  }
};

export default note;
