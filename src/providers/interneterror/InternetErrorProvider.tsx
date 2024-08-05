// src/providers/InternetErrorProvider.tsx
import React, { createContext, useContext, useState } from 'react';
import InternetErrorAlert from '../interneterror/InternetErrorAlert';

type InternetErrorContextType = {
  showError: (message: string) => void;
};

const InternetErrorContext = createContext<InternetErrorContextType | undefined>(undefined);

export const InternetErrorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [error, setError] = useState<string | null>(null);

  const showError = (message: string) => {
    setError(message);
  };

  const handleClose = () => {
    setError(null);
  };

  return (
    <InternetErrorContext.Provider value={{ showError }}>
      {children}
      {error && (
        <InternetErrorAlert visible={!!error} message={error} onClose={handleClose} />
      )}
    </InternetErrorContext.Provider>
  );
};

export const useInternetError = () => {
  const context = useContext(InternetErrorContext);
  if (context === undefined) {
    throw new Error('useInternetError must be used within an InternetErrorProvider');
  }
  return context;
};
