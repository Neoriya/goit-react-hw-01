import s from "./Message.module.css";
import clsx from "clsx";

const isOnline = true;

const Message = ({ autor = "default", message }) => {
  return (
    <div>
      {/* <h1 className={`${s.message} ${s.colors}`}>Message</h1> */}
      <h1 className={clsx(s.message, isOnline && s.colors)}>Message</h1>
      <p>Autor: {autor}</p>
      <span>{message}</span>
    </div>
  );
};

export default Message;
