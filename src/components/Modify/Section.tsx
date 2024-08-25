'use client';

import { forwardRef } from 'react';

import { useElements } from '@/providers/ElementProvider';
import { ElementProps } from '@/types/element';

import SectionForm from '../Forms/Section';

import Container from './Container';

const Section = forwardRef<HTMLDivElement, ElementProps>(({ props }) => {
  const { setElements, setSelectedElement } = useElements();

  const setSection = (section: any) => {
    setSelectedElement(prev => {
      if (!prev) return null;
      return { ...prev, style: section };
    });
    setElements(prev =>
      prev.map(p => (p.id === props.id ? { ...p, style: section } : p)),
    );
  };

  return (
    <Container>
      <SectionForm section={props.style} setSection={setSection} />
    </Container>
  );
});

Section.displayName = 'Section';
export default Section;
