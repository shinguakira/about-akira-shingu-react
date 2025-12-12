"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/shadcn/button";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/shadcn/badge";
import Modal from "@/components/ui/modal";
import Changelog from "@/components/ui/changelog";
import { changelogs } from "@/constants/changelog";
const ChangelogNotification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasNewChanges, setHasNewChanges] = useState(false);

  useEffect(() => {
    // should check cookie or localstorage or something to see when a use last visited
    // should implement storing the date visited on cookie or something
    setHasNewChanges(true);
  }, []);
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
        <Bell className="size-7 bg-slate-50" />
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
        {changelogs.map((changelog: ChangelogProps, index: number) => {
          return (
            <Changelog
              key={index}
              version={changelog.version}
              date={changelog.date}
              changes={changelog.changes}
            />
          );
        })}
      </Modal>
    </>
  );
};
export default ChangelogNotification;
