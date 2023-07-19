"use client";

import { useUser } from "@/hooks/useUser";
import Image from "next/image";

export function Header() {
  const { user } = useUser();
  return (
    <header className="flex w-full h-[10vh] p-6">
      <div>
        <Image src="/next.svg" alt="logo" width={50} height={50} />
      </div>
      {!user ? (
        <nav>
          <button className="text-white">Home page</button>
          <button className="">Jobs</button>
          <button className="">About us</button>
          <button className="">Dont have one account?</button>
        </nav>
      ) : (
        <span>ola</span>
      )}
    </header>
  );
}
