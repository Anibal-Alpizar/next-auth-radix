"use client";

import { SessionProvider } from "next-auth/react";

interface props {
  children: React.ReactNode;
}

function GlobalContext({ children }: props) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default GlobalContext;
