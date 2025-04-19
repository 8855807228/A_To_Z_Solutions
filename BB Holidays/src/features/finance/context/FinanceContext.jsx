import { createContext, useContext, useState } from 'react';

const FinanceContext = createContext();

export function useFinance() {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance must be used within a FinanceProvider');
  }
  return context;
}

export function FinanceProvider({ children }) {
  const [consultationPreferences, setConsultationPreferences] = useState({
    preferredMode: 'video',
    preferredTime: '10:00 AM',
  });

  const [webinarRegistrations, setWebinarRegistrations] = useState([]);

  const value = {
    consultationPreferences,
    setConsultationPreferences,
    webinarRegistrations,
    setWebinarRegistrations,
  };

  return (
    <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>
  );
}
