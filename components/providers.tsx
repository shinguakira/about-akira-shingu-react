"use client";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { UserRoleProvider } from "@/contexts/UserRoleContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system">
      <LanguageProvider>
        <UserRoleProvider>
          {children}
        </UserRoleProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
