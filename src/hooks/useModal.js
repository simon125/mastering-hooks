import { useState } from "react";

export const useModal = (initialModal = false) => {
  const [modalOpen, setModalOpen] = useState(initialModal);
  const toggle = () => setModalOpen(!modalOpen);
  return [modalOpen, setModalOpen, toggle];
};
