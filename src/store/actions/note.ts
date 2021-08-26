import { FluxStandardAction } from 'redux-promise-middleware';

/* for focussed note */
export const SET_NOTE_IN_FOCUS = 'SET_NOTE_IN_FOCUS';

export const setNoteInFocus = (
  focussedNoteId: string,
): FluxStandardAction => ({
  type: SET_NOTE_IN_FOCUS,
  payload: { focussedNoteId },
});
