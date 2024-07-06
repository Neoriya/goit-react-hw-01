import styles from "./Message.module.css";

const Message = ({ autor = "default", message }) => {
  return (
    <div>
      <h1 className={styles.message}>Message</h1>
      <p>Autor: {autor}</p>
      <span>{message}</span>
    </div>
  );
};

export default Message;
