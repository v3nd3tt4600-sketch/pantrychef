import './StatusMessage.css';

function ErrorMessage({ message }) {
  return (
    <div className="status-message status-message--error" role="alert">
      <h2>Oops, something went wrong</h2>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;