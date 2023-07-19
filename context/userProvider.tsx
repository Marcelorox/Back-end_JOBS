"use client";

import { createContext, useState } from "react";

interface User {
  name: string;
}

interface IUserContext {
  user: User | null;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const value: IUserContext = {
    user: user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
