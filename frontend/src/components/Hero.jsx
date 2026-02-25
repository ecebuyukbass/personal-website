import '../styles/hero.scss';
import me from '../assets/me.jpeg';
import ben from '../assets/ben.png'; 

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Ece Büyükbaş</h1>
        <p className="hero-subtitle">
          Software Engineer <br />
          Specialized in React & Java. I build high-quality web applications and share my engineering journey in public.        </p>

        <div className="hero-actions">
          <a href="/articles">Articles</a>
          <a href="/projects">Projects</a>
        </div>
      </div>

      <div className="hero-right">
        <img src={ben} className="cartoon" />
         <img src={me} className="photo" />

      </div>
    </section>
  );
}
