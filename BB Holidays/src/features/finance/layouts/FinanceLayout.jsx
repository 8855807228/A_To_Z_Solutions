import { WebinarProvider } from '../context/WebinarContext';

export default function FinanceLayout({ children }) {
  return <WebinarProvider>{children}</WebinarProvider>;
}
