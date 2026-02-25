import { useEffect, useState } from 'react';
import Sidebar from '../components/SideBar';
import '../styles/layout.scss';
import '../styles/articles-page.scss';
import { Link } from 'react-router-dom';


export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error(err));
  }, []);

  const handleCategoryYearSelect = (category, year) => {
    setSelectedCategory(category);
    setSelectedYear(year);
  };

  const filteredArticles = (selectedCategory && selectedYear)
    ? articles.filter((a) => a.category === selectedCategory && a.year.toString() === selectedYear)
    : articles;

  return (
    <div className="layout">
      <Sidebar
        onCategoryYearSelect={handleCategoryYearSelect}
        selectedCategory={selectedCategory}
        selectedYear={selectedYear}
      />

      <main className="main articles-page">
        <h1>Makalelerim</h1>

        {(selectedCategory && selectedYear) && (
          <p className="articles-filter">
            Filtre: <strong>{selectedYear} / {selectedCategory}</strong>
          </p>
        )}

        <ul className="articles-list">
          {filteredArticles.map((article) => (
            <li key={article.id} className="articles-item">
              <Link to={`/articles/${article.slug}`} className="article-card">
                <strong>{article.title}</strong>
                <div className="article-meta">
                  {article.year} / {article.category}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
