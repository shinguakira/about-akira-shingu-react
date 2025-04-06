import { Metadata } from "next";
import ContactClientPage from "../../../(localized)/[locale]/contact/client-page";

export const metadata: Metadata = {
  title: "Akira Shingu - お問い合わせ",
  description: "篠宮明へのお問い合わせ",
};

export default function ContactPage() {
  return <ContactClientPage locale="ja" />;
}
