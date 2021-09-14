/* Copyright 2021, Milkdown by Mirone. */
import React, { createContext } from 'react';

import { Mode } from './constant';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export const displaySidebarCtx = createContext(false);
export const scrolledCtx = createContext(false);
export const editorModeCtx = createContext(Mode.Default);
export const isDarkModeCtx = createContext(false);

export const setDisplaySidebarCtx = createContext<SetState<boolean>>(
  () => void 0,
);
export const setScrolledCtx = createContext<SetState<boolean>>(
  () => void 0,
);
export const setEditorModeCtx = createContext<SetState<Mode>>(
  () => void 0,
);
export const setIsDarkModeCtx = createContext<SetState<boolean>>(
  () => void 0,
);

const DisplaySidebar: React.FC = ({ children }: any) => {
  const [displaySidebar, setDisplaySidebar] = React.useState(false);

  return (
    <displaySidebarCtx.Provider value={displaySidebar}>
      <setDisplaySidebarCtx.Provider value={setDisplaySidebar}>
        {children}
      </setDisplaySidebarCtx.Provider>
    </displaySidebarCtx.Provider>
  );
};

const EditorMode: React.FC = ({ children }: any) => {
  const [editorMode, setEditorMode] = React.useState(Mode.Default);

  return (
    <editorModeCtx.Provider value={editorMode}>
      <setEditorModeCtx.Provider value={setEditorMode}>
        {children}
      </setEditorModeCtx.Provider>
    </editorModeCtx.Provider>
  );
};

const Scrolled: React.FC = ({ children }: any) => {
  const [scrolled, setScrolled] = React.useState(false);

  return (
    <scrolledCtx.Provider value={scrolled}>
      <setScrolledCtx.Provider value={setScrolled}>
        {children}
      </setScrolledCtx.Provider>
    </scrolledCtx.Provider>
  );
};

const IsDarkMode: React.FC = ({ children }: any) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <isDarkModeCtx.Provider value={isDarkMode}>
      <setIsDarkModeCtx.Provider value={setIsDarkMode}>
        {children}
      </setIsDarkModeCtx.Provider>
    </isDarkModeCtx.Provider>
  );
};
export const Context: React.FC = ({ children }: any) => (
  <IsDarkMode>
    <Scrolled>
      <DisplaySidebar>
        <EditorMode>{children}</EditorMode>
      </DisplaySidebar>
    </Scrolled>
  </IsDarkMode>
);
