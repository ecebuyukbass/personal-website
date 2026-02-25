import { useState, useEffect } from 'react';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [articles, setArticles] = useState([]);
  const [editingId, setEditingId] = useState(null);
const [category, setCategory] = useState('');

  const ADMIN_HEADERS = {
    'Content-Type': 'application/json',
    'x-admin-token': import.meta.env.VITE_ADMIN_TOKEN,
  };

  const loadArticles = async () => {
    const res = await fetch('http://localhost:3000/articles/admin/all', {
      headers: ADMIN_HEADERS,
    });

    if (!res.ok) {
      setArticles([]);
      return;
    }

    const data = await res.json();
    setArticles(data);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const saveArticle = async (publish) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const article = {
      title,
      slug,
      content,
      year: new Date().getFullYear(),
      category
    };

    let articleId = editingId;

    if (editingId) {
      await fetch(`http://localhost:3000/articles/${editingId}`, {
        method: 'PUT',
        headers: ADMIN_HEADERS,
        body: JSON.stringify(article),
      });
    } else {
      const res = await fetch('http://localhost:3000/articles', {
  method: 'POST',
  headers: ADMIN_HEADERS,
  body: JSON.stringify(article),
});

if (!res.ok) {
  alert('Article could not be saved');
  return;
}

const created = await res.json();

if (!created?.id) {
  alert('Article ID missing');
  return;
}

articleId = created.id;

if (publish) {
  await fetch(
    `http://localhost:3000/articles/${articleId}/publish`,
    { method: 'POST', headers: ADMIN_HEADERS }
  );
}

    }

    if (publish) {
      await fetch(`http://localhost:3000/articles/${articleId}/publish`, {
        method: 'POST',
        headers: ADMIN_HEADERS,
      });
    }

    setTitle('');
    setContent('');
    setEditingId(null);
    loadArticles();
  };

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto' }}>
      <h1>Write Article</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: '100%', padding: '12px', marginBottom: '12px' }}
      />
      <input
  type="text"
  placeholder="Category (e.g. Java)"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
/>


      <textarea
        placeholder="Write your article (Markdown supported)..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        style={{ width: '100%', padding: '12px' }}
      />

      <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
        <button onClick={() => saveArticle(false)}>Save as Draft</button>
        <button onClick={() => saveArticle(true)}>Publish</button>
      </div>

      <hr style={{ margin: '40px 0' }} />

      <h2>Your Articles</h2>

      <table width="100%" cellPadding="8">
        <thead>
          <tr>
            <th align="left">Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {articles.length === 0 ? (
            <tr>
              <td colSpan="3">No articles yet.</td>
            </tr>
          ) : (
            articles.map((article) => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>{article.status}</td>
                <td>
                  <button
                    onClick={() => {
                      setTitle(article.title);
                      setContent(article.content);
                      setEditingId(article.id);
                    }}
                  >
                    Edit
                  </button>

                  {article.status === 'DRAFT' && (
                    <button
                      onClick={async () => {
                        await fetch(
                          `http://localhost:3000/articles/${article.id}/publish`,
                          { method: 'POST', headers: ADMIN_HEADERS }
                        );
                        loadArticles();
                      }}
                    >
                      Publish
                    </button>
                  )}

                  <button
                    style={{ marginLeft: '8px', color: 'red' }}
                    onClick={async () => {
                      if (!confirm('Delete this article?')) return;
                      await fetch(
                        `http://localhost:3000/articles/${article.id}`,
                        { method: 'DELETE', headers: ADMIN_HEADERS }
                      );
                      loadArticles();
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
