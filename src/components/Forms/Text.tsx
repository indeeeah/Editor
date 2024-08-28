'use client';

import { ChangeEvent, useEffect, useRef } from 'react';

import { TextProps } from '@/types/element';

import Font from '../Edit/Font';
import Textarea from '../Textarea';

export default function TextForm({
  text,
  setText,
  onFocus,
  onBlur,
}: {
  text: TextProps;
  setText: (text: TextProps) => void;
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
    setText({ ...text, value });
  };

  return (
    <>
      <Font />
      <div className="py-2">
        <Textarea
          ref={textareaRef}
          text={text.value}
          onChange={handleChangeText}
        />
      </div>
    </>
  );
}
