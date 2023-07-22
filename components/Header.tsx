"use client";

import { useUser } from "@/hooks/useUser";
import Image from "next/image";

export function Header() {
  const { user } = useUser();
  return (
    <header className="flex w-full h-[10vh] p-6 bg-slate-500 items-center justify-between">
      <div>
        <Image src="/next.svg" alt="logo" width={100} height={100} />
      </div>

      {!user ? (
        <nav className="">
          <button className="mr-6 transition hover:text-green-500 hover:scale-110">
            Home
          </button>

          <button className="mr-6 transition hover:text-green-500 hover:scale-110">
            Jobs
          </button>

          <button className="mr-6 transition hover:text-green-500 hover:scale-110">
            About us
          </button>

          <button className="px-6 mr-6 transition bg-white border-transparent rounded-md h-max hover:text-white hover:scale-110 hover:bg-slate-700">
            register
          </button>
        </nav>
      ) : (
        <button>logout</button>
      )}
    </header>
  );
}
