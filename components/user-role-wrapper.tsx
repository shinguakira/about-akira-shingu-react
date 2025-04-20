'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export type UserRole = 'normalUser' | 'adminUser' | 'certification';

const ROLE_KEYS = {
  ADMIN: 'usr_type_a7x9z',
  CERTIFICATION: 'usr_type_c3r7f'
};

const ROLE_VALUES = {
  ADMIN: 'adm_8d92x7',
  CERTIFICATION: 'cert_5f3g2h'
};

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
        
        const adminValue = urlParams.get(ROLE_KEYS.ADMIN);
        if (adminValue === ROLE_VALUES.ADMIN) {
          setRole('adminUser');
          return;
        }
        
        const certValue = urlParams.get(ROLE_KEYS.CERTIFICATION);
        if (certValue === ROLE_VALUES.CERTIFICATION) {
          setRole('certification');
          
          if (pathname && !pathname.includes('/certifications')) {
            const locale = pathname.split('/')[1] || 'en';
            router.push(`/${locale}/certifications?${ROLE_KEYS.CERTIFICATION}=${ROLE_VALUES.CERTIFICATION}`);
          }
          return;
        }
        
        setRole('normalUser');
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
