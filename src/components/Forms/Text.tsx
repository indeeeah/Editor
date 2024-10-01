'use client';

import { ChangeEvent, useEffect, useRef } from 'react';

import { StyleProps } from '@/types/element';

import Font from '../Edit/Font';
import Textarea from '../Textarea';

export default function TextForm({
  text,
  setText,
  fontStyle,
  setFontStyle,
  onFocus,
  onBlur,
}: {
  text: string;
  setText: (text: string) => void;
  fontStyle: StyleProps;
  setFontStyle: (style: StyleProps) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleFocus = () => (onFocus ? onFocus() : null);
    const handleBlur = () => (onBlur ? onBlur() : null);

    const textareaElement = textareaRef.current;

    if (textareaElement) {
      textareaElement.addEventListener('focus', handleFocus);
      textareaElement.addEventListener('blur', handleBlur);
    }

    return () => {
      if (textareaElement) {
        textareaElement.removeEventListener('focus', handleFocus);
        textareaElement.removeEventListener('blur', handleBlur);
      }
    };
  }, [text, setText, onFocus, onBlur]);

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
  };

  return (
    <>
      <Font fontStyle={fontStyle} handleFontStyle={setFontStyle} />
      <div className="py-2">
        <Textarea ref={textareaRef} text={text} onChange={handleChangeText} />
      </div>
    </>
  );
}
