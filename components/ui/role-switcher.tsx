'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from './shadcn/button';
import { UserRole } from '../../components/user-role-wrapper';

export default function RoleSwitcher() {
  const [currentRole, setCurrentRole] = useState<UserRole>('normalUser');
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const userRole = urlParams.get('role');
      
      if (userRole === 'admin') {
        setCurrentRole('adminUser');
      } else if (userRole === 'certification') {
        setCurrentRole('certification');
      } else {
        setCurrentRole('normalUser');
      }
    }
  }, []);

  const switchRole = (newRole: UserRole) => {
    if (newRole === currentRole) return;
    
    setCurrentRole(newRole);
    
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const locale = pathname?.split('/')[1] || 'en';
      
      if (newRole === 'normalUser') {
        url.searchParams.delete('role');
        router.push(pathname || `/${locale}`);
      } else if (newRole === 'adminUser') {
        url.searchParams.set('role', 'admin');
        router.push(`${pathname || `/${locale}`}?role=admin`);
      } else if (newRole === 'certification') {
        router.push(`/${locale}/certifications?role=certification`);
      }
    }
  };

  if (!isClient) {
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
