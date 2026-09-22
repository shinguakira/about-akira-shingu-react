import type { ReactNode } from "react";

/**
 * type for ModalProps
 */
export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  modalTitle?: string; // optional. may need integrate with children
  modalDescription?: string; // optional. may need to be included in children
};
