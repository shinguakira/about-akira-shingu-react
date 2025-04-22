"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";

export type UserRole = "normalUser" | "adminUser" | "certification";

type UserRoleContextType = {
  role: UserRole;
  setUserRole: (role: UserRole) => void;
};

const UserRoleContext = createContext<UserRoleContextType>({
  role: "normalUser",
  setUserRole: () => {},
});

export const useUserRole = () => useContext(UserRoleContext);

type UserRoleProviderProps = {
  children: ReactNode;
  initialRole?: UserRole;
};

export const UserRoleProvider = ({
  children,
  initialRole = "normalUser",
}: UserRoleProviderProps) => {
  const [role, setRole] = useState<UserRole>(initialRole);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const parseUrlParams = () => {
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const userRole = urlParams.get("role");

        if (userRole === "admin") {
          setRole("adminUser");
        } else if (userRole === "certification") {
          setRole("certification");

          if (pathname && !pathname.includes("/certifications")) {
            const locale = pathname.split("/")[1] || "en";
            router.push(`/${locale}/certifications?role=certification`);
          }
        } else {
          setRole("normalUser");
        }
      }
    };

    parseUrlParams();

    window.addEventListener("popstate", parseUrlParams);

    return () => {
      window.removeEventListener("popstate", parseUrlParams);
    };
  }, [pathname, router]);

  useEffect(() => {
    try {
      localStorage.setItem("userRole", role);
    } catch (error) {
      console.error("Error storing user role:", error);
    }
  }, [role]);

  const setUserRole = (newRole: UserRole) => {
    if (newRole === role) return;

    setRole(newRole);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);

      if (newRole === "normalUser") {
        url.searchParams.delete("role");
      } else if (newRole === "adminUser") {
        url.searchParams.set("role", "admin");
      } else if (newRole === "certification") {
        url.searchParams.set("role", "certification");

        const locale = pathname?.split("/")[1] || "en";
        router.push(`/${locale}/certifications?role=certification`);
        return;
      }

      window.history.pushState({}, "", url.toString());
    }
  };

  return (
    <UserRoleContext.Provider value={{ role, setUserRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};
