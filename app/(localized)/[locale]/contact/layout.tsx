import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akira Shingu - Contact",
  description: "Contact Akira Shingu",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
