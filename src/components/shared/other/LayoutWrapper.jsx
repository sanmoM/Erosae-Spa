"use client"

import { usePathname } from 'next/navigation';
import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';

const LayoutWrapper = ({children}) => {
     const pathname = usePathname();
     const hideLayout = ["/dashboard"]
     const shouldHideLayout = hideLayout.some((route) =>
    pathname.startsWith(route)
  );
  return (
    <>
      {!shouldHideLayout && <Header />}
      <div className="min-h-[60vh] ">{children}</div>
      {!shouldHideLayout && <Footer />}
    </>
  )
}

export default LayoutWrapper
