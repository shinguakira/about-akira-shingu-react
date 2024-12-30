/**
 * type for ModalProps
 */
type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  modalTitle?: string; // optional. may need integrate with children
  modalDescription?: string; // optional. may need to be included in children
};
