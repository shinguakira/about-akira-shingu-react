import React from "react";
import FaqClientPage from "../../[locale]/faq/client-page";

export const metadata = {
  title: "Akira Shingu - よくある質問",
  description: "Akira Shinguに関するよくある質問",
};

export default function JapaneseFaqPage() {
  return <FaqClientPage locale="ja" />;
}
