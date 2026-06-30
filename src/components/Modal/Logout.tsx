//src/components/Logout/Logout.tsx

import { logoutUser } from "../../services/auth";
import css from "./Modal.module.css";

export default function Logout() {
  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <button onClick={handleLogout} className={css.logOutButton}>
      Logout
    </button>
  );
}
