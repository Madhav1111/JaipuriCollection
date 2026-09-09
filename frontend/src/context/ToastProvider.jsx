import { useState } from "react";
import ToastContext from "./ToastContext";
import Toast from "../components/Toast/Toast";

function ToastProvider({ children }) {
  const [toast, setToast] = useState({
    show: false,
    title: "",
    message: "",
  });

  const showToast = (title, message) => {
    setToast({
      show: true,
      title,
      message,
    });

    setTimeout(() => {
      setToast({
        show: false,
        title: "",
        message: "",
      });
    }, 2500);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <Toast
        show={toast.show}
        title={toast.title}
        message={toast.message}
      />
    </ToastContext.Provider>
  );
}

export default ToastProvider;