import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

function NotFound() {
  useDocumentTitle('Page not found');

  return (
    <section className="not-found">
      <h1>404 – Page not found</h1>
      <p>Sorry, we couldn't find the page you were looking for.</p>
      <Link to="/" className="btn">
        Back to home
      </Link>
    </section>
  );
}

export default NotFound;