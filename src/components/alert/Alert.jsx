import { useState } from "react";
import "./Alert.module.css"; // Você pode personalizar este CSS para o seu alerta

const Alert = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(false);

  const showAlert = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, duration);
  };

  return (
    <div>
      <button onClick={showAlert}>Notify!</button>
      {visible && <div className="alert">{message}</div>}
    </div>
  );
};

export default Alert;
