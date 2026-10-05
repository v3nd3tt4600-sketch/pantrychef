import './Loader.css';

function Loader() {
  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="loader__spinner" aria-hidden="true"></div>
      <p>Finding recipes...</p>
    </div>
  );
}

export default Loader;