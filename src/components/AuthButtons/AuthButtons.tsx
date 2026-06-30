//src/components/AuthButtons/AuthButtons.tsx

import css from "./AuthButtons.module.css";

type Props = {
  onLogin: () => void;
  onRegister: () => void;
};

export default function AuthButtons({ onLogin, onRegister }: Props) {
  return (
    <div className={css.authButtons}>
      <button onClick={onLogin} className={css.login}>
        <svg width="20" height="20">
          <use href="/icons.svg#icon-log-in" />
        </svg>
        <span>Login</span>
      </button>

      <button onClick={onRegister} className={css.registerBtn}>
        Registration
      </button>
    </div>
  );
}
