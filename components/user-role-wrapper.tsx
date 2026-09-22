"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useHasMounted } from "@/hooks/use-has-mounted";

export type UserRole = "normalUser" | "adminUser" | "certification";

// NEXT_PUBLIC_* values are inlined at build time, so these are constants —
// they were never client-only and never needed to be state.
export const ROLE_KEYS = {
  ADMIN: process.env.NEXT_PUBLIC_ADMIN_ROLE_KEY || "usr_type_a7x9z",
  CERTIFICATION:
    process.env.NEXT_PUBLIC_CERTIFICATION_ROLE_KEY || "usr_type_c3r7f",
};

export const ROLE_VALUES = {
  ADMIN: process.env.NEXT_PUBLIC_ADMIN_ROLE_VALUE || "adm_8d92x7",
  CERTIFICATION:
    process.env.NEXT_PUBLIC_CERTIFICATION_ROLE_VALUE || "cert_5f3g2h",
};

type UserRoleWrapperProps = {
  children: (role: UserRole) => ReactNode;
};

export const UserRoleWrapper = ({ children }: UserRoleWrapperProps) => {
  const [role, setRole] = useState<UserRole>("normalUser");
  const pathname = usePathname();
  const router = useRouter();
  const isClient = useHasMounted();

  useEffect(() => {
    const parseUrlParams = () => {
      const urlParams = new URLSearchParams(window.location.search);

      if (urlParams.get(ROLE_KEYS.ADMIN) === ROLE_VALUES.ADMIN) {
        setRole("adminUser");
        return;
      }

      if (
        urlParams.get(ROLE_KEYS.CERTIFICATION) === ROLE_VALUES.CERTIFICATION
      ) {
        setRole("certification");

        if (pathname && !pathname.includes("/certifications")) {
          const locale = pathname.split("/")[1] || "en";
          router.push(
            `/${locale}/certifications?${ROLE_KEYS.CERTIFICATION}=${ROLE_VALUES.CERTIFICATION}`
          );
        }
        return;
      }

      setRole("normalUser");
    };

    // The role lives in the query string, which is a browser-owned value this
    // component subscribes to via popstate — reading it needs an effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
