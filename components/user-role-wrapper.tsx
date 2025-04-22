"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export type UserRole = "normalUser" | "adminUser" | "certification";

const DEFAULT_ROLE_KEYS = {
  ADMIN: "usr_type_a7x9z",
  CERTIFICATION: "usr_type_c3r7f",
};

const DEFAULT_ROLE_VALUES = {
  ADMIN: "adm_8d92x7",
  CERTIFICATION: "cert_5f3g2h",
};

type UserRoleWrapperProps = {
  children: (role: UserRole) => ReactNode;
};

export const UserRoleWrapper = ({ children }: UserRoleWrapperProps) => {
  const [role, setRole] = useState<UserRole>("normalUser");
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [roleKeys, setRoleKeys] = useState(DEFAULT_ROLE_KEYS);
  const [roleValues, setRoleValues] = useState(DEFAULT_ROLE_VALUES);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ADMIN_ROLE_KEY) {
      setRoleKeys((prev) => ({
        ...prev,
        ADMIN:
          process.env.NEXT_PUBLIC_ADMIN_ROLE_KEY || DEFAULT_ROLE_KEYS.ADMIN,
      }));
    }

    if (process.env.NEXT_PUBLIC_CERTIFICATION_ROLE_KEY) {
      setRoleKeys((prev) => ({
        ...prev,
        CERTIFICATION:
          process.env.NEXT_PUBLIC_CERTIFICATION_ROLE_KEY ||
          DEFAULT_ROLE_KEYS.CERTIFICATION,
      }));
    }

    if (process.env.NEXT_PUBLIC_ADMIN_ROLE_VALUE) {
      setRoleValues((prev) => ({
        ...prev,
        ADMIN:
          process.env.NEXT_PUBLIC_ADMIN_ROLE_VALUE || DEFAULT_ROLE_VALUES.ADMIN,
      }));
    }

    if (process.env.NEXT_PUBLIC_CERTIFICATION_ROLE_VALUE) {
      setRoleValues((prev) => ({
        ...prev,
        CERTIFICATION:
          process.env.NEXT_PUBLIC_CERTIFICATION_ROLE_VALUE ||
          DEFAULT_ROLE_VALUES.CERTIFICATION,
      }));
    }

    const parseUrlParams = () => {
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);

        const adminKey =
          process.env.NEXT_PUBLIC_ADMIN_ROLE_KEY || DEFAULT_ROLE_KEYS.ADMIN;
        const adminValue =
          process.env.NEXT_PUBLIC_ADMIN_ROLE_VALUE || DEFAULT_ROLE_VALUES.ADMIN;
        if (urlParams.get(adminKey) === adminValue) {
          setRole("adminUser");
          return;
        }

        const certKey =
          process.env.NEXT_PUBLIC_CERTIFICATION_ROLE_KEY ||
          DEFAULT_ROLE_KEYS.CERTIFICATION;
        const certValue =
          process.env.NEXT_PUBLIC_CERTIFICATION_ROLE_VALUE ||
          DEFAULT_ROLE_VALUES.CERTIFICATION;
        if (urlParams.get(certKey) === certValue) {
          setRole("certification");

          if (pathname && !pathname.includes("/certifications")) {
            const locale = pathname.split("/")[1] || "en";
            router.push(`/${locale}/certifications?${certKey}=${certValue}`);
          }
          return;
        }

        setRole("normalUser");
      }
    };

    setIsClient(true);
    parseUrlParams();

    window.addEventListener("popstate", parseUrlParams);

    return () => {
      window.removeEventListener("popstate", parseUrlParams);
    };
  }, [pathname, router]);

  if (!isClient) {
    return null;
  }

  return <>{children(role)}</>;
};
