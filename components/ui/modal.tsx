"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "components/ui/shadcn/dialog";
import { ScrollArea } from "@/components/ui/shadcn/scroll-area";
const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  modalTitle = "Changelog",
  modalDescription = "最近のアップデート",
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{modalTitle}</DialogTitle>
          <DialogDescription>{modalDescription}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-4 h-[60vh] pr-4">{children}</ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
export default Modal;
