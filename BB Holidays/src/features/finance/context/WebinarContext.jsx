import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const sheetId = '1HD9U94cJEpxvm3rsdnQshd3aTYrJAxGC3SOBdLdv2ac';
const range = 'Session!A2:F';
const deployId =
  'AKfycbwFYSIPOvnqw5JAk6O_JIIqtRglhl7BO2uEIV8lHsUi6BGVBofNfrHMBr71mzQchxPEBQ';
const deployUrl = `https://script.google.com/macros/s/${deployId}/exec`;

const defaultWebinarData = {};

const WebinarContext = createContext();

export function WebinarProvider({ children }) {
  const [webinarData1, setWebinarData] = useState(defaultWebinarData);

  useEffect(() => {
    axios
      .get(deployUrl, {
        params: {
          sheetId,
          range,
        },
      })
      .then((response) => {
        const data = response.data;
        console.log('Fetched data:', data); // Log the fetched data

        if (Array.isArray(data) && data.length > 0) {
          const webinarData1 = {
            title: data[0][0],
            date: data[0][1],
            time: data[0][2],
            status: data[0][3],
            language: data[0][4],
            seats: data[0][5],
          };
          console.log('Parsed webinar data:', webinarData1); // Log the parsed webinar data
          setWebinarData(webinarData1);
        } else {
          console.warn('No data found in the specified range.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const updateWebinarData = (newData) => {
    setWebinarData(newData);
    return true;
  };

  return (
    <WebinarContext.Provider value={{ webinarData1, updateWebinarData }}>
      {children}
    </WebinarContext.Provider>
  );
}

export function useWebinarContext() {
  const context = useContext(WebinarContext);
  if (!context) {
    throw new Error('useWebinarContext must be used within a WebinarProvider');
  }
  return context;
}
