import { FluxStandardAction } from 'redux-promise-middleware';
import { getNote } from '../../backend/services/note';
/* for focussed note */
export const GET_SELECTED_NOTE = 'GET_SELECTED_NOTE';

export const getSelectedNote = (
  selectedNoteId: string,
): FluxStandardAction => ({
  type: GET_SELECTED_NOTE,
  payload: getNote(selectedNoteId),
});
