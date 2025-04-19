import React from "react";
import HomeClientPage from "../[locale]/page/client-page";

export const metadata = {
  title: "Akira Shingu - Home",
  description: "Akira Shingu's portfolio website - Home page",
};

export default function EnglishHomePage() {
  return <HomeClientPage locale="en" />;
}
