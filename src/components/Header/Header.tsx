//  src/components/Header/Header.tsx

import AuthButtons from "../AuthButtons/AuthButtons";
import Logo from "../Logo/Logo";
import Logout from "../Modal/Logout";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

import type { User } from "firebase/auth";

type Props = {
  user: User | null;
  onLogin: () => void;
  onRegister: () => void;
};

export default function Header({ user, onLogin, onRegister }: Props) {
  return (
    <header className="container">
      <div className={css.headerContainer}>
        <Logo />
        <Navigation />
        {user ? (
          <Logout />
        ) : (
          <AuthButtons onLogin={onLogin} onRegister={onRegister} />
        )}
      </div>
    </header>
  );
}
