import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsPreview from '../components/ProjectsPreview';
import ArticlesPreview from '../components/ArticlesPreview';
import '../styles/home.scss';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="home dark">
      <Hero />

      <section className="home-section about">
        <About />
      </section>

      <section className="home-section split">
        <ProjectsPreview />
        <ArticlesPreview />
      </section>

      <section className="home-section contact">
        <Contact />
      </section>
    </main>
  );
}
