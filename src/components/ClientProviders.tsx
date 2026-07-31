"use client";

import { type ReactNode } from "react";
import { FavoritesProvider } from "@/context/FavoritesContext";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}