"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import "../globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import checkAuth from '@/lib/auth';
import Header from "@/containers/header";
import LeftSidebar from "@/containers/left-sidebar";
import { Inter } from "next/font/google";
import StoreProvider from "../StoreProvider";
import RightSidebar from "@/containers/right-sidebar";
import ModalLayout from "@/containers/modal-layout";
import initializeApp from "@/lib/init";
import { ToastContainer } from "react-toastify";


const inter = Inter({ subsets: ["latin"] });

type LayoutProps = {
  children: ReactNode;
};

initializeApp()

const ProtectedLayout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false)
    const mainContentRef = useRef(null);



useEffect(() => {
  const token = checkAuth(); // Check authentication status

  // Redirect to login page if not logged in
  if (!token) {
    router.replace('/login');
  }else{
    setIsLoggedIn(true)
  }
}, [router]);


  return (
    <html lang="en">
    <body className={inter.className}>
      <StoreProvider>
      {
        isLoggedIn ? <>
            {/* Left drawer - containing page content and side bar (always open) */}
          <div className="drawer lg:drawer-open">
            <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
            <Header contentRef={mainContentRef}/>
            <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200" ref={mainContentRef}>
                {children}
                <div className="h-16"></div>
            </main>
        </div> 
            <LeftSidebar />
          </div>

          {/* Right drawer - containing secondary content like notifications list etc.. */}
          <RightSidebar />

          {/* Notification layout container */}
          <ToastContainer />

          {/* Modal layout container */}
          <ModalLayout />

          </> : <></>
      }
      </StoreProvider>
    </body>
    </html>
  );
};

export default ProtectedLayout;
