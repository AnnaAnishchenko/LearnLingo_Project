/*src/App.tsx */
import { useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TeachersPage from "./components/TeachersPage/TeachersPage";

import Modal from "./components/Modal/Modal";
import LogIn from "./components/Modal/LogIn";
import Registration from "./components/Modal/Registration";

import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";

import { auth } from "./firebase/firebase";
import { useEffect } from "react";

type ModalType = "login" | "register" | null;

function App() {
  const [modalType, setModalType] = useState<ModalType>(null);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    if (user) {
      setModalType(null);
    }
  }, [user]);

  const closeModal = () => setModalType(null);

  return (
    <>
      <Header
        user={user}
        onLogin={() => setModalType("login")}
        onRegister={() => setModalType("register")}
      />
      <Hero />
      <TeachersPage />

      {/* LOGIN */}
      {modalType === "login" && (
        <Modal onClose={closeModal}>
          <LogIn />
        </Modal>
      )}

      {/* REGISTER */}
      {modalType === "register" && (
        <Modal onClose={closeModal}>
          <Registration />
        </Modal>
      )}
    </>
  );
}

export default App;
