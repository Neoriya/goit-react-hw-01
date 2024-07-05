const Message = ({ autor = "default", message }) => {
  return (
    <div>
      <h1>Message</h1>
      <p>Autor: {autor}</p>
      <span>{message}</span>
    </div>
  );
};

export default Message;
