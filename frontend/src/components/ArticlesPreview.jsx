import { useNavigate } from 'react-router-dom';

export default function ArticlesPreview() {
  const navigate = useNavigate();
  return (
    <div className="preview-card">
      <h3> Articles</h3>
      <p>Notes, thoughts and things I learn while building.</p>
      <span
        className="preview-link"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/articles')}
      >
        Read articles →
      </span>
    </div>
  );
}
