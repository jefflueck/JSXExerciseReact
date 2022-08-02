const Tweet = ({ username, name, date, message }) => {
  return (
    <div>
      <h2>username: {username}</h2>
      <h3>name: {name}</h3>
      <p>date: {date}</p>
      <p>message: {message}</p>
    </div>
  );
};
