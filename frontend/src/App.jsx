import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetail from './pages/ArticleDetail';
import Admin from './pages/Admin';
import Layout from './layout/Layout';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}
