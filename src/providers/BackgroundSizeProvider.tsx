'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

type BackgroundSize = {
  width: number;
  height: number;
};

type BackgroundSizeContextType = {
  backgroundSize: BackgroundSize;
  setBackgroundSize: Dispatch<SetStateAction<BackgroundSize>>;
};

const BackgroundSizeContext = createContext<BackgroundSizeContextType>({
  backgroundSize: { width: 375, height: 667 },
  setBackgroundSize: () => {},
});

export const useBackgroundSize = () => {
  const context = useContext(BackgroundSizeContext);

  if (!context) {
    throw new Error(
      'useBackgroundSize must be used within a BackgroundSizeProvider',
    );
  }

  return context;
};

export const BackgroundSizeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [backgroundSize, setBackgroundSize] = useState<BackgroundSize>({
    width: 375,
    height: 667,
  });

  const value = useMemo(
    () => ({ backgroundSize, setBackgroundSize }),
    [backgroundSize],
  );

  return (
    <BackgroundSizeContext.Provider value={value}>
      {children}
    </BackgroundSizeContext.Provider>
  );
};
