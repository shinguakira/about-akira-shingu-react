"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./shadcn/button";
import { UserRole } from "../../components/user-role-wrapper";
import { useMediaQuery } from "@/hooks/use-media-query";

const DEFAULT_ROLE_KEYS = {
  ADMIN: "usr_type_a7x9z",
  CERTIFICATION: "usr_type_c3r7f",
};

const DEFAULT_ROLE_VALUES = {
  ADMIN: "adm_8d92x7",
  CERTIFICATION: "cert_5f3g2h",
};

export default function RoleSwitcher() {
  const [currentRole, setCurrentRole] = useState<UserRole>("normalUser");
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [testMode, setTestMode] = useState(false); // Default to false - hidden unless explicitly enabled
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [roleKeys, setRoleKeys] = useState(DEFAULT_ROLE_KEYS);
  const [roleValues, setRoleValues] = useState(DEFAULT_ROLE_VALUES);

  useEffect(() => {
    setIsClient(true);

    const testModeEnv = process.env.NEXT_PUBLIC_TEST_MODE;
    setTestMode(testModeEnv === "1");

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

    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);

      const adminKey =
        process.env.NEXT_PUBLIC_ADMIN_ROLE_KEY || DEFAULT_ROLE_KEYS.ADMIN;
      const adminValue =
        process.env.NEXT_PUBLIC_ADMIN_ROLE_VALUE || DEFAULT_ROLE_VALUES.ADMIN;
      if (urlParams.get(adminKey) === adminValue) {
        setCurrentRole("adminUser");
        return;
      }

      const certKey =
        process.env.NEXT_PUBLIC_CERTIFICATION_ROLE_KEY ||
        DEFAULT_ROLE_KEYS.CERTIFICATION;
      const certValue =
        process.env.NEXT_PUBLIC_CERTIFICATION_ROLE_VALUE ||
        DEFAULT_ROLE_VALUES.CERTIFICATION;
      if (urlParams.get(certKey) === certValue) {
        setCurrentRole("certification");
        return;
      }

      setCurrentRole("normalUser");
    }
  }, []);

  const switchRole = (newRole: UserRole) => {
    if (newRole === currentRole) return;

    setCurrentRole(newRole);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const locale = pathname?.split("/")[1] || "en";

      url.searchParams.delete(roleKeys.ADMIN);
      url.searchParams.delete(roleKeys.CERTIFICATION);

      if (newRole === "normalUser") {
        router.push(pathname || `/${locale}`);
      } else if (newRole === "adminUser") {
        router.push(
          `${pathname || `/${locale}`}?${roleKeys.ADMIN}=${roleValues.ADMIN}`
        );
      } else if (newRole === "certification") {
        router.push(
          `/${locale}/certifications?${roleKeys.CERTIFICATION}=${roleValues.CERTIFICATION}`
        );
      }
    }
  };

  if (!isClient) {
    return null;
  }

  // Show on desktop screens regardless of test mode, or on mobile if test mode is enabled
  console.log(testMode);
  if (!isDesktop && !testMode) {
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
