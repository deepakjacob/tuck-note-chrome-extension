/* Copyright 2021, Milkdown by Mirone. */
import React from 'react';

import { Mode } from '../constant';
import {
  MilkdownEditor,
  MilkdownRef,
} from '../MilkdownEditor/MilkdownEditor';
import { CodeMirror, CodeMirrorRef } from './CodeMirror';
import className from './style.module.css';

type DemoProps = {
  mode: Mode;
  isDarkMode: boolean;
};

export const Demo = ({ mode, isDarkMode }: DemoProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const lockCode = React.useRef(false);
  const milkdownRef = React.useRef<MilkdownRef>(null);
  const codeMirrorRef = React.useRef<CodeMirrorRef>(null);
  const [md] = React.useState(' this is a test');

  const milkdownListener = React.useCallback(
    (getMarkdown: () => string) => {
      const lock = lockCode.current;
      if (lock) return;

      const { current } = codeMirrorRef;
      if (!current) return;
      const result = getMarkdown();
      current.update(result);
    },
    [],
  );

  const onCodeChange = React.useCallback((getCode: () => string) => {
    const { current } = milkdownRef;
    if (!current) return;
    const value = getCode();
    current.update(value);
  }, []);

  const classes = [
    className.container,
    mode === Mode.TwoSide ? className.twoSide : '',
  ].join(' ');

  return !md.length ? null : (
    <div ref={ref} className={classes}>
      <div className={className.milk}>
        <MilkdownEditor
          ref={milkdownRef}
          content={md}
          onChange={milkdownListener}
        />
      </div>
      <CodeMirror
        ref={codeMirrorRef}
        value={md}
        onChange={onCodeChange}
        dark={isDarkMode}
        lock={lockCode}
      />
    </div>
  );
};
