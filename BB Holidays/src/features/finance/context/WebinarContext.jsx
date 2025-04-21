import { createContext, useContext, useState } from 'react';

const defaultWebinarData = {
  title: "I've Helped 1,000+ People Start SIPs - Now It's Your Turn",
  subtitle:
    "Understand How SIPs in Mutual Funds Work and Why Most People Don't Use Them Right",
  description: `If you've been thinking about investing but feel overwhelmed by too much information — or unsure where to begin — you're not alone. Most people hear about SIPs but never get started simply because no one breaks it down in a way that makes sense.

This 2-hour live webinar is designed to change that. Whether you're just starting out or have delayed investing due to fear or confusion, I'll guide you step-by-step through how SIPs in mutual funds actually work, why they're one of the most powerful tools for building long-term wealth, and how you can get started with as little as ₹500 a month.

You'll learn how to choose the right type of mutual fund for your goals, understand the difference between SIP and lump sum investing, and most importantly — discover the common mistakes most investors make and how to avoid them.

By the end of this session, you'll walk away with clarity, confidence, and a simple action plan to begin your investing journey the very next day.`,
  dates: [
    {
      date: '2025-04-12',
      time: '06:30 PM',
      language: 'Marathi',
    },
    {
      date: '2025-04-13',
      time: '05:00 PM',
      language: 'Marathi',
    },
  ],
  duration: '2 Hours',
  price: '₹500',
  seats: 60,
  topics: [
    'Essential Financial Terms Explained — so you understand investing without any jargon',
    'How Mutual Funds Actually Work — the foundation you need before starting a SIP',
    'What SIP Really Is — and how it helps you invest consistently without timing the market',
    'How SIPs in Mutual Funds Actually Work — demystified with real-life examples',
    'SIP vs Lump Sum — when to choose what, and why',
    'How to Pick the Right Mutual Fund — based on your goals and risk profile',
    '5 Common SIP Mistakes Most People Make — and how to avoid them',
    'How to Stay Disciplined for Long-Term Wealth Creation — even during market ups and downs',
    'How to Track and Review Your SIPs — so you stay on course with your goals',
  ],
  features: [
    'Interactive live session',
    'Expert guidance from CFP',
    'Real-world case studies',
    'Investment strategies',
    'Personalized doubt clearing',
    'Downloadable resources',
  ],
  targetAudience: [
    "You've heard about SIPs but never really understood how they work",
    'You want to start investing but feel confused or afraid of making mistakes',
    "You're tired of keeping money in savings accounts or FDs and want better returns",
    "You've already started a SIP but aren't sure if you've chosen the right fund",
    'You want to understand mutual funds and SIPs in simple, beginner-friendly language',
    "You're looking for expert guidance without being sold any product",
  ],
  hostInfo: {
    name: 'Buddhabhushan More',
    title: 'Certified Financial Planner',
    description: `A Certified Financial Planner, AMFI-Registered MFD (ARN 261263), and an experienced Financial Educator. Over the years, I've helped 1,000+ individuals confidently start their SIPs, understand mutual funds, and make smarter financial decisions — without the jargon, confusion, or sales pressure.`,
    certifications: [
      'AMFI-Registered MFD (ARN 261263)',
      'Mutual Fund Distribution',
      'Investment Advisory',
      'Research Analysis',
      'Retirement Planning',
      'Financial Education',
    ],
    affiliations: [
      'Member of Marathwada Independent Financial Advisors Association (MIFAA)',
    ],
  },
  platform: 'Live on Zoom',
  platformNote: 'Link will be shared post-registration',
};

const WebinarContext = createContext();

export function WebinarProvider({ children }) {
  const [webinarData, setWebinarData] = useState(defaultWebinarData);

  const updateWebinarData = (newData) => {
    setWebinarData(newData);
    return true;
  };

  return (
    <WebinarContext.Provider value={{ webinarData, updateWebinarData }}>
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
