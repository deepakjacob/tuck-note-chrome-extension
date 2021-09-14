import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Provider, useDispatch } from 'react-redux';
import { getSelectedNote } from '../store/actions/note';
import configureStore from '../store/configureStore';
import { Demo } from './Demo/Demo';
import { editorModeCtx, isDarkModeCtx } from './Context';
import { useContext } from 'react';

const store = configureStore();

const ContentView = () => {
  const editorMode = useContext(editorModeCtx);
  const isDarkMode = useContext(isDarkModeCtx);
  const dispatch = useDispatch();
  const handleClick = () =>
    dispatch(getSelectedNote('3333-dfdf-r4rer'));
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Get Note
      </Button>
      <Container>
        <Demo mode={editorMode} isDarkMode={isDarkMode} />
      </Container>
    </>
  );
};

const View = () => {
  return (
    <Provider store={store}>
      <ContentView />
    </Provider>
  );
};
export default View;
