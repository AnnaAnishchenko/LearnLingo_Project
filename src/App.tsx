/*src/App.tsx */
import { useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Modal from "./components/Modal/Modal";
import LogIn from "./components/Modal/LogIn";
import Registration from "./components/Modal/Registration";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header />
      <Hero />
      {/* для перевірки виключити ф-цію модалки// */}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <LogIn />
        </Modal>
      )}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Registration />
        </Modal>
      )}
      {/* для перевірки підключили модалку// */}
      {/* <Modal onClose={() => {}}>
        <LogIn />
      </Modal> */}
      {/* <Modal onClose={() => {}}>
        <Registration />
      </Modal> */}
      {/* видалити після перевірки */}
    </>
  );
}

export default App;
