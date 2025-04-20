'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from './shadcn/button';
import { UserRole } from '../../components/user-role-wrapper';

const ROLE_KEYS = {
  ADMIN: 'usr_type_a7x9z',
  CERTIFICATION: 'usr_type_c3r7f'
};

const ROLE_VALUES = {
  ADMIN: 'adm_8d92x7',
  CERTIFICATION: 'cert_5f3g2h'
};

export default function RoleSwitcher() {
  const [currentRole, setCurrentRole] = useState<UserRole>('normalUser');
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [testMode, setTestMode] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const testModeEnabled = process.env.NEXT_PUBLIC_TEST_MODE === '1';
    setTestMode(testModeEnabled);
    
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      
      const adminValue = urlParams.get(ROLE_KEYS.ADMIN);
      if (adminValue === ROLE_VALUES.ADMIN) {
        setCurrentRole('adminUser');
        return;
      }
      
      const certValue = urlParams.get(ROLE_KEYS.CERTIFICATION);
      if (certValue === ROLE_VALUES.CERTIFICATION) {
        setCurrentRole('certification');
        return;
      }
      
      setCurrentRole('normalUser');
    }
  }, []);

  const switchRole = (newRole: UserRole) => {
    if (newRole === currentRole) return;
    
    setCurrentRole(newRole);
    
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const locale = pathname?.split('/')[1] || 'en';
      
      url.searchParams.delete(ROLE_KEYS.ADMIN);
      url.searchParams.delete(ROLE_KEYS.CERTIFICATION);
      
      if (newRole === 'normalUser') {
        router.push(pathname || `/${locale}`);
      } else if (newRole === 'adminUser') {
        router.push(`${pathname || `/${locale}`}?${ROLE_KEYS.ADMIN}=${ROLE_VALUES.ADMIN}`);
      } else if (newRole === 'certification') {
        router.push(`/${locale}/certifications?${ROLE_KEYS.CERTIFICATION}=${ROLE_VALUES.CERTIFICATION}`);
      }
    }
  };

  if (!isClient || !testMode) {
    return null;
  }

  return (
    <div className="flex flex-col space-y-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
      <h3 className="text-sm font-medium">Switch User Role</h3>
      <div className="flex space-x-2">
        <Button 
          variant={currentRole === 'normalUser' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => switchRole('normalUser')}
        >
          Normal
        </Button>
        <Button 
          variant={currentRole === 'adminUser' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => switchRole('adminUser')}
        >
          Admin
        </Button>
        <Button 
          variant={currentRole === 'certification' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => switchRole('certification')}
        >
          Certification
        </Button>
      </div>
    </div>
  );
}
