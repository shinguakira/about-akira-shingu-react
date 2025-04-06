import { Metadata } from "next";
import ContactClientPage from "../../../(localized)/[locale]/contact/client-page";

export const metadata: Metadata = {
  title: "Akira Shingu - Contact",
  description: "Contact Akira Shingu",
};

export default function ContactPage() {
  return <ContactClientPage locale="en" />;
}
