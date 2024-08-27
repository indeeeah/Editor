'use client';

import { useEffect, useRef } from 'react';

import { TextProps } from '@/types/element';

import Font from '../Edit/Font';
import Textarea from '../Textarea';

export default function TextForm({
  text,
  setText,
}: {
  text: TextProps;
  setText: (text: TextProps) => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleFocus = () => setText({ ...text, focus: true });
    const handleBlur = () => setText({ ...text, focus: false });

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
  }, [text, setText]);

  return (
    <>
      <Font />
      <div className="py-2">
        <Textarea ref={textareaRef} />
      </div>
    </>
  );
}
