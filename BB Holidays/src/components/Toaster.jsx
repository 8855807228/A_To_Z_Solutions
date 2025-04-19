import { Toaster as HotToaster } from 'react-hot-toast';

export default function Toaster() {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#fff',
          color: '#333',
        },
        success: {
          iconTheme: {
            primary: '#1a56db',
            secondary: '#fff',
          },
        },
      }}
    />
  );
}
