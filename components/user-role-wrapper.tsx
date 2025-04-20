'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { useUserRole, UserRole } from '@/contexts/UserRoleContext';
import { usePathname, useRouter } from 'next/navigation';

type UserRoleWrapperProps = {
  children: (role: UserRole) => ReactNode;
};

export const UserRoleWrapper = ({ children }: UserRoleWrapperProps) => {
  const { role } = useUserRole();
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    if (role === 'certification' && pathname && !pathname.includes('/certifications')) {
      const locale = pathname.split('/')[1] || 'en';
      router.push(`/${locale}/certifications?role=certification`);
    }
  }, [role, pathname, router]);

  if (!isClient) {
    return null;
  }

  return <>{children(role)}</>;
};
