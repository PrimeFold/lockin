'use client';

import { usePathname } from 'next/navigation';
import GlobalHeader from './global-header';
import { ReactNode } from 'react';

interface ConditionalHeaderProps {
  children: ReactNode;
}

export default function ConditionalHeader({ children }: ConditionalHeaderProps) {
  const pathname = usePathname();

  // Don't show header on protected routes
  const isProtectedRoute = pathname.startsWith('/dashboard') || pathname.startsWith('/auth');

  return (
    <>
      {!isProtectedRoute && <GlobalHeader />}
      {children}
    </>
  );
}