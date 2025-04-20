'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type LanguageContextType = {
  locale: string;
  changeLanguage: (locale: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  changeLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

type LanguageProviderProps = {
  children: ReactNode;
  initialLocale?: string;
};

export const LanguageProvider = ({ 
  children, 
  initialLocale = 'en' 
}: LanguageProviderProps) => {
  const [locale, setLocale] = useState(initialLocale);
  const router = useRouter();

  useEffect(() => {
    const pathname = window.location.pathname;
    const pathLocale = pathname.split('/')[1];
    
    if (pathLocale === 'en' || pathLocale === 'ja') {
      setLocale(pathLocale);
      try {
        localStorage.setItem('language', pathLocale);
      } catch (error) {
        console.error('Error storing language preference:', error);
      }
      return;
    }
    
    try {
      const storedLocale = localStorage.getItem('language');
      if (storedLocale && (storedLocale === 'en' || storedLocale === 'ja')) {
        setLocale(storedLocale);
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, []);

  const changeLanguage = (newLocale: string) => {
    if (newLocale === locale) return;
    
    try {
      localStorage.setItem('language', newLocale);
    } catch (error) {
      console.error('Error storing language preference:', error);
    }
    
    setLocale(newLocale);
    
    document.documentElement.lang = newLocale;
    
    const pathname = window.location.pathname;
    const currentPath = pathname.split('/').slice(2).join('/');
    
    if (currentPath) {
      router.push(`/${newLocale}/${currentPath}`);
    } else {
      router.push(`/${newLocale}`);
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
