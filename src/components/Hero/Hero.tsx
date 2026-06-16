// src/components/Hero/Hero.tsx

export default function Hero() {
  return (
    <section className="container hero">
      <div className="hero-content">
        <h1>Unlock your potential with the best language tutors</h1>

        <p>Embark on an Exciting Language Journey...</p>

        <button className="get-started-button">Get Started</button>
      </div>

      <div className="hero-image">
        <img src="/images/hero-image.jpg" alt="Teacher" />
      </div>
    </section>
  );
}
