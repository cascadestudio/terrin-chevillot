"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const isStudioRoute = pathname.startsWith("/studio");

  return (
    <>
      {!isStudioRoute && <Header />}
      <main>{children}</main>
      {!isStudioRoute && <Footer />}
    </>
  );
}
