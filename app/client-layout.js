'use client';

import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";

export default function ClientLayout({ children }) {
  return (
    <ClerkProvider>
      <Toaster />
      <AppContextProvider>
        {children}
      </AppContextProvider>
    </ClerkProvider>
  );
}
