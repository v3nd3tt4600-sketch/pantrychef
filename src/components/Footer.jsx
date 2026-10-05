import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {currentYear} PantryChef. Built with React.</p>
        <p>
          Recipe data from{' '}
          <a
            href="https://www.themealdb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            TheMealDB
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;