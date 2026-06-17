//  src/components/Header/Header.tsx

import AuthButtons from "../AuthButtons/AuthButtons";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className="container">
      <div className={css.headerContainer}>
        <Logo />
        <Navigation />
        <AuthButtons />
      </div>
    </header>
  );
}
