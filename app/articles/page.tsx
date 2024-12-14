import CommingSoon from "@/components/ui/comming-soon";
import { QiitaIcon } from "@/components/ui/icons";
import React from "react";

const ArticlePage = () => {
  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-center">
      <CommingSoon label="Articles" />
      <a
        href="https://qiita.com/ShinguAkira"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center space-x-2"
      >
        <QiitaIcon className="h-6 w-6" />
        <span className="font-semibold text-green-600">Visit Qiita</span>
      </a>
    </div>
  );
};

export default ArticlePage;
