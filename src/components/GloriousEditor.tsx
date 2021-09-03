import { Box, makeStyles } from '@material-ui/core';
import { useMemo, useState } from 'react';
import { BaseEditor, createEditor, Descendant } from 'slate';
import { Editable, ReactEditor, Slate, withReact } from 'slate-react';

type CustomElement = { type: 'paragraph'; children: CustomText[] };
type CustomText = { text: string };

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const GloriousEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Descendant[]>([
    {
      type: 'paragraph',
      children: [{ text: 'Type some markdown!' }],
    },
  ]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Editable />
    </Slate>
  );
};
// A style sheet
const useStyles = makeStyles({
  root: {
    margin: '5px',
    border: '1px solid grey',
  }, // a style rule
});

const EditorWrapper = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <GloriousEditor />
    </Box>
  );
};
export default EditorWrapper;
