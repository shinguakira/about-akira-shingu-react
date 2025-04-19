import React from "react";
import HomeClientPage from "../[locale]/page/client-page";

export const metadata = {
  title: "Akira Shingu - ホーム",
  description: "Akira Shinguのポートフォリオサイト - ホームページ",
};

export default function JapaneseHomePage() {
  return <HomeClientPage locale="ja" />;
}
