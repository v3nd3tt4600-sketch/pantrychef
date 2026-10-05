import './StatusMessage.css';

function EmptyState({ title, message }) {
  return (
    <div className="status-message">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default EmptyState;