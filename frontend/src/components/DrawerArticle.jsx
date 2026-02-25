export default function DrawerArticle({ article }) {
  if (!article) return null;

  return (
    <>
      <h2>{article.title}</h2>
      <p style={{ opacity: 0.8 }}>{article.year}</p>
      <p>{article.content.slice(0, 120)}...</p>
    </>
  );
}
