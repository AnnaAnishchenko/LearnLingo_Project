// scr/Stats/Stats.tsx
import { stats } from "../../data/stats";
import css from "./Stats.module.css";

export default function Stats() {
  return (
    <ul className={css.statsBox}>
      {stats.map(({ value, text }) => (
        <li key={text} className={css.statsItem}>
          <span className={css.value}>{value}</span>
          <span className={css.text}>{text}</span>
        </li>
      ))}
    </ul>
  );
}
