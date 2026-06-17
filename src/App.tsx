/*src/App.tsx */
import { useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Modal from "./components/Modal/Modal";
import LogIn from "./components/LogIn/LogIn";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header />
      <Hero />

      {/* для перевірки підключили модалку// */}
      {/* {isModalOpen && (
        <Modal onClose={closeModal}>
          <LogIn />
        </Modal>
      )} */}
      <Modal onClose={() => {}}>
        <LogIn />
      </Modal>
      {/* видалити після перевірки */}
    </>
  );
}

export default App;
