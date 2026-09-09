import "./Toast.css";

function Toast({ show, title, message }) {
  return (
    <div className={`toast ${show ? "show" : ""}`}>
      <div className="toast-icon">
        ✓
      </div>

      <div className="toast-content">
        <h4>{title}</h4>
        <p>{message}</p>

        <div className="toast-progress"></div>
      </div>
    </div>
  );
}

export default Toast;