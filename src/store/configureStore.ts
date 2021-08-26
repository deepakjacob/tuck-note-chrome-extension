import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
} from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import promise, {
  FluxStandardAction,
} from 'redux-promise-middleware';

import note, { NoteState } from './reducers/note';

export interface State {
  note: NoteState;
}

export default () => {
  const middlewares = [promise];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store: Store = createStore(
    combineReducers<State, FluxStandardAction>({
      note,
    }),
    {},
    composeWithDevTools(middleWareEnhancer),
  );

  return store;
};
