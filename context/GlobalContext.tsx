"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

interface props {
  children: React.ReactNode;
}

function GlobalContext({ children }: props) {
  return (
    <SessionProvider>
      {children}
      <Toaster />
    </SessionProvider>
  );
}

export default GlobalContext;
