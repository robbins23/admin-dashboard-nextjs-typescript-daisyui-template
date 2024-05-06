"use client";

import { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import "../globals.css";
import initializeApp from "@/lib/init";
import checkAuth from "@/lib/auth";
import { usePathname, useRouter } from 'next/navigation';
import StoreProvider from '../StoreProvider';

const inter = Inter({ subsets: ["latin"] });

// Initializing different libraries
initializeApp();

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const pathname = usePathname();



  useEffect(() => {
    const token = checkAuth(); // Check authentication status

    // Redirect to login page if not logged in and not on login page
    if (!token && pathname !== '/login') {
      router.replace('/login');
    }
    if(token && pathname === '/'){
      router.replace('/welcome');
    }
  }, [router, pathname]);

  return (
    <html lang="en">
    <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
    </body>
</html>
  );
}
