import { useEffect, useState } from 'react';
import '../styles/sidebar.scss';

export default function Sidebar({ onCategoryYearSelect, selectedCategory, selectedYear }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/articles/sidebar')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <aside className="sidebar">
      <h3>Makalelerim</h3>
      {Object.entries(data).map(([year, categories]) => (
        <div key={year} className="category">
          <span className="category-title">{year}</span>
          <ul>
            {Object.keys(categories).map((category) => (
              <li key={category}>
                <button
                  className={`sidebar-category-btn${selectedCategory === category && selectedYear === year ? ' active' : ''}`}
                  onClick={() => onCategoryYearSelect(category, year)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
