"use client";
import { useState } from "react";
import { Button } from "@/components/ui/shadcn/button";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/shadcn/badge";
import Modal from "@/components/ui/modal";
import Changelog from "@/components/ui/changelog";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePortfolioApi } from "@/hooks/use-portfolio-api";
import type { ChangelogItem } from "@shinguakira/portfolio-api-types";

const ChangelogNotification = () => {
  const { locale } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // TODO: check a cookie / localStorage for the last visit date instead of
  // always announcing new changes.
  const [hasNewChanges, setHasNewChanges] = useState(true);

  // The bell sits in the nav bar on every route, so the changelog is only
  // requested once the modal is actually opened.
  const { data } = usePortfolioApi<[ChangelogItem[]]>(
    [{ path: "changelogs" }],
    isModalOpen
  );
  const changelogs = data?.[0] ?? [];

  // GET /api/changelogs is not localized: every change carries both languages.
  const lang = locale === "ja" ? "ja" : "en";

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setHasNewChanges(false);
  };
  return (
    <>
      <Button
        variant="ghost"
        size={null}
        className="relative"
        onClick={handleOpenModal}
      >
        <Bell className="size-6" />
        {hasNewChanges && (
          <Badge
            variant="destructive"
            className="absolute -right-3 -top-3 flex size-4 items-center justify-center p-0 text-[10px]"
          >
            !
          </Badge>
        )}
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {changelogs.map((changelog: ChangelogItem, index: number) => {
          return (
            <Changelog
              key={index}
              version={changelog.version}
              date={changelog.date}
              changes={changelog.changes.map((change) => ({
                type: change.type,
                description: change[lang].description,
              }))}
            />
          );
        })}
      </Modal>
    </>
  );
};
export default ChangelogNotification;
