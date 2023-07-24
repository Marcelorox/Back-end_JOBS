"use client";

import { useUser } from "@/hooks/useUser";
import Image from "next/image";

export function Header() {
  const { user } = useUser();
  return (
    <header className="flex w-full h-[10vh] p-6 bg-green-200 items-center justify-between">
      <div>
        <Image src="/next.svg" alt="logo" width={100} height={100} />
      </div>

      {!user ? (
        <nav className="">
          <button className="mr-6 transition hover:text-blue-600 hover:scale-110">
            Home
          </button>

          <button className="mr-6 transition hover:text-blue-600 hover:scale-110">
            Jobs
          </button>

          <button className="mr-6 transition hover:text-blue-600 hover:scale-110">
            About us
          </button>

          <button className="p-3 px-8 mr-6 transition bg-white border-transparent border-blue-300 rounded-md hover:border hover:text-blue-600 h-max hover:scale-110 ">
            register
          </button>
        </nav>
      ) : (
        <button>logout</button>
      )}
    </header>
  );
}
