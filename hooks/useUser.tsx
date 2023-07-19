"use client";

import { UserContext } from "@/context/userProvider";
import { useContext } from "react";

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser requires a context");
  }

  return context;
}
