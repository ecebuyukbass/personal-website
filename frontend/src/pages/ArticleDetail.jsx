import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/home.scss';
import '../styles/article.scss';
import { marked } from 'marked';



export default function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/articles/${slug}`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="home">
      <h1>{article.title}</h1>
      <p>{article.year}</p>

      <article
  dangerouslySetInnerHTML={{
    __html: marked.parse(article.content),
  }}
/>

    </div>
  );
}
