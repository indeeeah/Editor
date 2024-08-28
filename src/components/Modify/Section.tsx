'use client';

import { forwardRef } from 'react';

import { useElements } from '@/providers/ElementProvider';
import { ElementProps } from '@/types/element';

import SectionForm from '../Forms/Section';

import Container from './Container';

const Section = forwardRef<HTMLDivElement, ElementProps>(({ props }) => {
  const { setElements, setSelectedElement } = useElements();

  const setSectionStyle = (sectionStyle: any) => {
    setSelectedElement(prev => {
      if (!prev) return null;
      return { ...prev, style: sectionStyle };
    });
    setElements(prev =>
      prev.map(p => (p.id === props.id ? { ...p, style: sectionStyle } : p)),
    );
  };

  return (
    <Container>
      <SectionForm
        sectionStyle={props.style}
        setSectionStyle={setSectionStyle}
      />
    </Container>
  );
});

Section.displayName = 'Section';
export default Section;
