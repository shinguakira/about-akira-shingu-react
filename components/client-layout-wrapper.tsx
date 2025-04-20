'use client';

import React from 'react';
import { UserRoleWrapper } from './user-role-wrapper';
import NavBar from './ui/nav-bar';

type ClientLayoutWrapperProps = {
  children: React.ReactNode;
};

export default function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  return (
    <UserRoleWrapper>
      {(role) => (
        <>
          {role !== 'certification' && <NavBar />}
          <main className={`text-dark flex min-h-screen w-full grow items-center ${role !== 'certification' ? 'pt-36' : 'pt-8'}`}>
            {children}
          </main>
        </>
      )}
    </UserRoleWrapper>
  );
}
