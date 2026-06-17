// src/components/Hero/Hero.tsx
import Stats from "../Stats/Stats";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`container ${css.heroContainer}`}>
      <div className={css.heroContent}>
        <h1 className={css.heroTitle}>
          Unlock your potential with the best{" "}
          <span className={css.highlight}>language</span> tutors
        </h1>

        <p className={css.heroDescription}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>

        <button className={`btn ${css.getStartedButton}`}>Get Started</button>
      </div>

      <div className={css.heroImage}>
        <img src="/images/hero-image.jpg" alt="Teacher" />
      </div>
      <Stats />
    </section>
  );
}
