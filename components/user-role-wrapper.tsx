'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export type UserRole = 'normalUser' | 'adminUser' | 'certification';

type UserRoleWrapperProps = {
  children: (role: UserRole) => ReactNode;
};

export const UserRoleWrapper = ({ children }: UserRoleWrapperProps) => {
  const [role, setRole] = useState<UserRole>('normalUser');
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const parseUrlParams = () => {
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const userRole = urlParams.get('role');
        
        if (userRole === 'admin') {
          setRole('adminUser');
        } else if (userRole === 'certification') {
          setRole('certification');
          
          if (pathname && !pathname.includes('/certifications')) {
            const locale = pathname.split('/')[1] || 'en';
            router.push(`/${locale}/certifications?role=certification`);
          }
        } else {
          setRole('normalUser');
        }
      }
    };

    setIsClient(true);
    parseUrlParams();
    
    window.addEventListener('popstate', parseUrlParams);
    
    return () => {
      window.removeEventListener('popstate', parseUrlParams);
    };
  }, [pathname, router]);

  if (!isClient) {
    return null;
  }

  return <>{children(role)}</>;
};
