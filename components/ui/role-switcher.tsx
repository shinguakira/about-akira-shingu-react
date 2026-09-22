"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./shadcn/button";
import {
  ROLE_KEYS,
  ROLE_VALUES,
  type UserRole,
} from "../../components/user-role-wrapper";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useHasMounted } from "@/hooks/use-has-mounted";

// Inlined at build time, so this is a constant, not client-only state.
const TEST_MODE = process.env.NEXT_PUBLIC_TEST_MODE === "1";

export default function RoleSwitcher() {
  const [currentRole, setCurrentRole] = useState<UserRole>("normalUser");
  const pathname = usePathname();
  const router = useRouter();
  const isClient = useHasMounted();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    let roleFromUrl: UserRole = "normalUser";
    if (urlParams.get(ROLE_KEYS.ADMIN) === ROLE_VALUES.ADMIN) {
      roleFromUrl = "adminUser";
    } else if (
      urlParams.get(ROLE_KEYS.CERTIFICATION) === ROLE_VALUES.CERTIFICATION
    ) {
      roleFromUrl = "certification";
    }

    // The role comes from the query string, a browser-owned value that is not
    // readable while rendering on the server.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentRole(roleFromUrl);
  }, []);

  const switchRole = (newRole: UserRole) => {
    if (newRole === currentRole) return;

    setCurrentRole(newRole);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const locale = pathname?.split("/")[1] || "en";

      url.searchParams.delete(ROLE_KEYS.ADMIN);
      url.searchParams.delete(ROLE_KEYS.CERTIFICATION);

      if (newRole === "normalUser") {
        router.push(pathname || `/${locale}`);
      } else if (newRole === "adminUser") {
        router.push(
          `${pathname || `/${locale}`}?${ROLE_KEYS.ADMIN}=${ROLE_VALUES.ADMIN}`
        );
      } else if (newRole === "certification") {
        router.push(
          `/${locale}/certifications?${ROLE_KEYS.CERTIFICATION}=${ROLE_VALUES.CERTIFICATION}`
        );
      }
    }
  };

  if (!isClient) {
    return null;
  }

  // Show on desktop screens regardless of test mode, or on mobile if test mode is enabled
  if (!isDesktop && !TEST_MODE) {
    return null;
  }

  return (
    <div className="flex flex-col space-y-2 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
      <div className="flex space-x-2">
        <Button
          variant={currentRole === "normalUser" ? "default" : "outline"}
          size="sm"
          onClick={() => switchRole("normalUser")}
        >
          Normal
        </Button>
        <Button
          variant={currentRole === "adminUser" ? "default" : "outline"}
          size="sm"
          onClick={() => switchRole("adminUser")}
        >
          Admin
        </Button>
        <Button
          variant={currentRole === "certification" ? "default" : "outline"}
          size="sm"
          onClick={() => switchRole("certification")}
        >
          Certification
        </Button>
      </div>
    </div>
  );
}
