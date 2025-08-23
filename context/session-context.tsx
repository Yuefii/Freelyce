"use client";

import { createContext, useContext, useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type SessionContextType = {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
};

const SessionContext = createContext<SessionContextType>({
  user: null,
  loading: true,
  logout: async () => {},
  refresh: async () => {},
});

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchUser() {
    try {
      const res = await fetch("/api/features/user/me", {
        credentials: "include",
      });

      if (!res.ok) {
        setUser(null);
        return;
      }

      const data = await res.json();
      setUser(data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const hasToken = document.cookie.includes("token=");

    if (hasToken) {
      fetchUser();
    } else {
      setLoading(false);
      setUser(null);
    }
  }, []);

  const logout = async () => {
    await fetch("/api/features/user/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
  };

  const refresh = async () => {
    await fetchUser();
  };

  return (
    <SessionContext.Provider value={{ user, loading, logout, refresh }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
