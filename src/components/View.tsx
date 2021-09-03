import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Provider, useDispatch } from 'react-redux';
import { getSelectedNote } from '../store/actions/note';
import configureStore from '../store/configureStore';
import GloriousEditor from './GloriousEditor';

const store = configureStore();

const ContentView = () => {
  const dispatch = useDispatch();
  const handleClick = () =>
    dispatch(getSelectedNote('3333-dfdf-r4rer'));
  return (
    <>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Get Note
        </Button>
      </Box>
      <Box>
        <GloriousEditor />
      </Box>
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
